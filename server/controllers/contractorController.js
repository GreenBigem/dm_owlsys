import User from "../models/user.js";
import Contractor from "../models/Contractor.js";

// Get all contractors
// http://SERVER:PORT/api/API_VERSION/contractors
export const getAllContractors = async (req, res) => {
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
export const createContractor = async (req, res) => {
  try {
    const { surname, name } = req.body;
    const user = await User.findById(req.userId);
    const newContractor = new Contractor({
      surname: surname,
      name,
      user_id: user._id,
    });

    await newContractor.save();

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
export const getContractorById = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const { id } = req.params;

    const contractor = await Contractor.findById(id);
    console.log(contractor);
    res.json({ contractor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Внутренняя ошибка сервера." });
  }
};

// Patch Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
export const patchContractorById = async (req, res) => {
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

// Delete Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
export const deleteContractorById = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (user) {
      const id = req.params.id;
      const deletedContractor = await Contractor.findOneAndUpdate(
        { id, user_id: req.userId },
        { is_deleted: true },
        { returnNewDocument: true }
      );
      res
        .status(200)
        .json({ deletedContractor, message: "Контрагент успешно удален." });
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
