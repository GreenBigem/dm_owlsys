import User from "../models/user.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";


// Register

export const register = async (req, res) => {
    try {
        const { username, password } = req.body

        const isUsed = await User.findOne({ username })

        if (isUsed) {
            res.json({
                message: 'Данный Username уже занят'
            })
        } else {

            const salt = bcrypt.genSaltSync(11)
            const hash = bcrypt.hashSync(password, salt)

            const newUser = new User({
                username,
                password: hash
            })

            const token = jwt.sign({
                id: newUser._id
            },
                process.env.JWT_SECRET,
                { expiresIn: '30d' }
            )

            await newUser.save()
            res.json({
                newUser,
                token,
                message: 'Регистрация прошла успешно.'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({ message: "Ошибка при создании пользователя." })
    }

}

// Login

export const login = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })

        if (!user) {
            res.json({ message: "Такого пользователя не существует." })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({ message: "Неверный пароль." })
        }

        const token = jwt.sign({
            id: user._id
        },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        )

        res.json({ user, token, message: "Пользователь вошел в систему." })


    } catch (error) {
        console.log(error);
        res.json({ message: "Ошибка при авторизации." })
    }
}

// Get me

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) {
            return res.json({ message: "Такого пользователя не существует." })
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