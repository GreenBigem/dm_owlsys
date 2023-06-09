import User from "../models/user.js";
import Task from "../models/Task.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Get all Tasks
// http://SERVER:PORT/api/API_VERSION/tasks
export const getAllTasks = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      const tasks = await Task.find({
        user_id: user.id,
        is_deleted: false,
      }).sort("-createdAt");

      if (!tasks) {
        res.status(204).json({ message: "Задач нет." });
      } else res.status(200).json({ tasks });
    } else {
      res.status(401.1).json({ message: "Такого пользователя не существует." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Внутренняя ошибка сервера." });
  }
};

// Create task
// http://SERVER:PORT/api/API_VERSION/tasks
export const createTask = async (req, res) => {
  try {
    const { title, description, endDate } = req.body;

    const user = await User.findById(req.userId);

    if (req.files) {
      let fileName = Date.now().toString() + req.files.image.name;
      const __dirname = dirname(fileURLToPath(import.meta.url));

      req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));

      const newTaskWithImage = new Task({
        username: user.username,
        title,
        description,
        end_date: endDate,
        imgUrl: fileName,
        author: req.userId,
      });

      await newTaskWithImage.save();
      await User.findOneAndUpdate(req.userId, {
        $push: { tasks: newTaskWithImage },
      });

      return res.json(newTaskWithImage);
    }

    const newTaskWithoutImage = new Task({
      username: user.username,
      title,
      description,
      end_date: endDate,
      imgUrl: "",
      author: req.userId,
    });

    await newTaskWithoutImage.save();
    await User.findOneAndUpdate(req.userId, {
      $push: { tasks: newTaskWithoutImage },
    });

    res.json(newTaskWithoutImage);
  } catch (error) {
    console.log(error);
    res.json({ message: "Что-то пошло не так." });
  }
};

// Get Task by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
export const getTaskById = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      const { id } = req.params;
      const contractor = await Contractor.findOne({
        _id: id,
        user_id: user.id,
      });
      res
        .status(200)
        .json({ contractor, message: "Контрагент успешно найден." });
    } else {
      res.status(401.1).json({ message: "Такого пользователя не существует." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Внутренняя ошибка сервера." });
  }
};

// Patch Task by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
export const patchTaskById = async (req, res) => {
  try {
    const { data } = req.body;
    const user = await User.findById(req.userId);

    if (user) {
      const id = req.params.id;
      const patchedContractor = await Contractor.findOneAndUpdate(id, data, {
        returnNewDocument: true,
      });
      res
        .status(200)
        .json({ patchedContractor, message: "Контрагент успешно обновлен." });
    } else {
      res.status(401).json({
        message: "У Вас нет доступа для изменения этого массива данных",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Внутренняя ошибка сервера." });
  }
};

// Delete Task by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
export const deleteTaskById = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (user) {
      const id = req.params.id;
      const deletedTask = await Task.findOneAndUpdate(
        { id, user_id: req.userId },
        { is_deleted: true },
        { returnNewDocument: true }
      );
      res
        .status(200)
        .json({ deletedTask, message: "Контрагент успешно удален." });
    } else {
      res.status(401).json({
        message: "У Вас нет доступа для изменения этого массива данных.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Внутренняя ошибка сервера." });
  }
};
