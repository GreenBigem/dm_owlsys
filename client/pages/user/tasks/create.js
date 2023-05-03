import TasksLayout from "@/components/tasksLayout/tasksLayout";
import { createTask } from "@/src/redux/features/task/taskSlice";
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Create() {

        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [image, setImage] = useState('')
        const [endDate, setEndDate] = useState(false)
        const [redirect, setRedirect] = useState()
        const dispatch = useDispatch()
        const router = useRouter()

        const submitHandle = () => {


            try {
                const data = new FormData()
                data.append('title', title)
                data.append('description', description)
                data.append('image', image)
                data.append('end_date', endDate)
                dispatch(createTask(data))
                router.push('/user/tasks/')

            } catch (error) {
                console.log(error);
            }
        }

        const clearFormHandler = () => {
            setTitle(''),
            setDescription(''),
            setEndDate(''),
            setImage(''),
            router.push('/user/tasks/')
        }


    return (
        <>
            <TasksLayout>
                <div className="bg-gray-100">
                    <div className="px-5 py-5">
                        <h1>Создание новой задачи:</h1>
                        <form onSubmit={(e) => e.preventDefault()} className="mt-3">
                            <div className="grid gap-6 mb-6 md:grid-cols-1">
                                <div>
                                    <label htmlFor="Название задачи" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Название задачи
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        id="title"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Название задачи" required />
                                </div>
                                <div>
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Описание задачи
                                    </label>
                                    <input
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        id="description"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Описание задачи" />
                                </div>

                                <div>
                                    <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Срок выполнения
                                    </label>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        id="endDate"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Срок выполнения" />
                                </div>
                                <div>
                                    <label htmlFor="imgUrl" className="text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-hidden cursor-pointer">
                                        Прикрепить изображение
                                    </label>
                                    <input
                                        type="file"
                                        // value={image}
                                        onChange={(e) => setImage(e.target.files[0])}
                                        id="imgUrl"
                                        className="hidden" />
                                </div>
                                <div className="flex object-cover py-2">
                                    { image && (
                                        <img src={URL.createObjectURL(image)} alt={image.name} />
                                    ) }
                                </div>
                            </div>
                            <button
                                type="submit"
                                onClick={submitHandle}
                                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-3xl">
                                Сохранить
                            </button>
                            <button
                                type="submit"
                                onClick={clearFormHandler}
                                className="shadow-2xl mx-3 text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Отменить
                            </button>
                        </form>

                    </div>


                </div>
            </TasksLayout>

        </>
    )
}