import User from "../models/user.js";
import Task from "../models/Task.js"
import path, { dirname } from 'path'
import { fileURLToPath } from "url";
import Contractor from "../models/Contractor.js";


// Get all contractors

export const getAllContractors = async (req, res) => {
    try {

        const contractors = await Contractor.find().sort('-createdAt')
        // const popularTasks = await Task.find().limit(5).sort('-views')

        if (!contractors) {
            res.json({ message: "Контрагентов нет." })
        } else (
            res.json({contractors})
        )
    } catch (error) {
        console.log(error);
    }
}
// Create Contractor
// http://localhost:3002/api/contractors

export const createContractor = async (req, res) => {
    try {
        const { surname, name } = req.body

        const user = await User.findById(req.userId)

        const newContractor = new Contractor({
            surname: surname,
            name,
            user_id: user._id
        })

        await newContractor.save()
        // await User.findOneAndUpdate(req.userId, {
        //     $push: { tasks: newContractor }
        // })

        res.json({newContractor, message: 'Новый контрагент создан.'})

    } catch (error) {
        console.log(error);
        res.json({message: 'Что-то пошло не так.'})
    }
}

// Get Contractor by id
// http://localhost:3002/api/contractors/:id

export const getContractorById = async (req, res) => {
    try {
        // console.log(req.params);
        const user = await User.findById(req.userId)
        if (user) {
            const { id } = req.params
            // console.log(id);
            const contractor = await Contractor.findOne({_id: id, user_id: user.id})
            // const contractor = await Contractor.findOne({_id: id})
            console.log(contractor)
            res.json({ contractor, message: 'Контрагент успешно найден.' })
        } else (
            res.json({ message: "Такого пользователя не существует." })
        )
    } catch (error) {
      console.log(error);
        res.json({error, message: 'Нет доступа!' })
    }
}

// Update Contractor by id
// http://localhost:3002/api/contractors/:id

export const updateContractorById = async (req, res) => {
    try {
        const { data } = req.body

        const user = await User.findById(req.userId)
        if (user) {
            const id = req.params.id

            const updatedContractor = await Contractor.findOneAndUpdate(id, data, { returnNewDocument : true })

            res.json(updatedContractor)
        } else {
            res.json({message: 'У Вас нет доступа для изменения этого массива данных'})
        }

    } catch (error) {
        console.log(error);
        res.json({message: 'Что-то пошло не так.'})
    }
}

// Delete Contractor by id
// http://localhost:3002/api/contractors/:id

export const deleteContractorById = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (user) {
            const id = req.params.id
            const deletedContractor = await Contractor.findOneAndUpdate({id, user_id: req.userId}, { "is_deleted": true }, { returnNewDocument : true })
            res.json({deletedContractor, message: 'Контрагент успешно удален.'})
        } else {
            res.json({message: 'У Вас нет доступа для изменения этого массива данных.'})
        }
    } catch (error) {
        console.log(error);
        res.json({message: 'Что-то пошло не так.'})
    }
}