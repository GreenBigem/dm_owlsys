import User from "../models/user.js";
import Task from "../models/Task.js"
import path, { dirname } from 'path'
import { fileURLToPath } from "url";


// GetAll Tasks

export const getAll = async (req, res) => {
    try {

        const tasks = await Task.find().sort('-createdAt')
        const popularTasks = await Task.find().limit(5).sort('-views')

        if (!tasks) {
            res.json({ message: "Задач нет." })
        } else (
            res.json({tasks, popularTasks})
        )
    } catch (error) {
        console.log(error);
    }
}
// Create task

export const createTask = async (req, res) => {
    try {
        const { title, description, endDate } = req.body

        const user = await User.findById(req.userId)

        if (req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const __dirname = dirname(fileURLToPath(import.meta.url))

            req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))

            const newTaskWithImage = new Task({
                username: user.username,
                title,
                description,
                end_date: endDate,
                imgUrl: fileName,
                author: req.userId
            })

            await newTaskWithImage.save()
            await User.findOneAndUpdate(req.userId, {
                $push: { tasks: newTaskWithImage }
            })

            return res.json(newTaskWithImage)

        }

        const newTaskWithoutImage = new Task({
            username: user.username,
            title,
            description,
            end_date: endDate,
            imgUrl: '',
            author: req.userId
        })

        await newTaskWithoutImage.save()
        await User.findOneAndUpdate(req.userId, {
            $push: { tasks: newTaskWithoutImage }
        })

        res.json(newTaskWithoutImage)

    } catch (error) {
        console.log(error);
        res.json({message: 'Что-то пошло не так.'})
    }
}

// Get me

export const getMe = async (req, res) => {
    try {

        const user = User.findById(req.userId)
        if (!user) {
            res.json({ message: "Такого пользователя не существует." })
        }

        const token = jwt.sign({
            id: user._id
        },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        )

        res.json({ user, token })

    } catch (error) {
        res.json({ message: 'Нет доступа' })
    }
}