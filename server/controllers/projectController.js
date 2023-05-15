import User from "../models/user.js";
import Project from "../models/Project.js";

// Get all contractors
// http://SERVER:PORT/api/API_VERSION/contractors
export const getAllProjects = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      const contractors = await Contractor.find({
        user_id: user.id,
        is_deleted: false,
      }).sort("-createdAt");
      if (!contractors) {
        res.status(204).json({ message: "Контрагентов нет." });
      } else res.status(200).json({ contractors });
    } else {
      res.status(401.1).json({ message: "Такого пользователя не существует." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Внутренняя ошибка сервера." });
  }
};

// Create Contractor
// http://SERVER:PORT/api/API_VERSION/contractors
export const createProject = async (req, res) => {
  try {
    const { surname, name } = req.body;
    const user = await User.findById(req.userId);
    const newContractor = new Contractor({
      surname: surname,
      name,
      user_id: user._id,
    });

    await newProject.save();

    res
      .status(201)
      .json({ newContractor, message: "Новый контрагент создан." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Внутренняя ошибка сервера." });
  }
};

// Get Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
export const getProjectById = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      const { id } = req.params;
      const contractor = await Project.findOne({
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

// Patch Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
export const patchProjectById = async (req, res) => {
  try {
    const { data } = req.body;
    const user = await User.findById(req.userId);

    if (user) {
      const id = req.params.id;
      const patchedProject = await Project.findOneAndUpdate(id, data, {
        returnNewDocument: true,
      });
      res
        .status(200)
        .json({ patchedProject, message: "Контрагент успешно обновлен." });
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

// Delete Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
export const deleteProjectById = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (user) {
      const id = req.params.id;
      const deletedProject = await Project.findOneAndUpdate(
        { id, user_id: req.userId },
        { is_deleted: true },
        { returnNewDocument: true }
      );
      res
        .status(200)
        .json({ deletedProject, message: "Контрагент успешно удален." });
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
