// import axios from '../../../src/utils/axios'
import TasksLayout from "@/components/tasksLayout/tasksLayout";
import { TaskItem } from "./index/taskItem";
import { PopularTask } from './index/popularTask';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTasks } from "@/src/redux/features/task/taskSlice";

export default function Index() {

const dispatch = useDispatch()
const { tasks, popularTasks } = useSelector((state) => state.task)

useEffect(() => {
    dispatch(getAllTasks())
}, [dispatch])

    if (!tasks) {
        return (
            <div className="text-xl text-black text-center py-10">
                Задач нет.
            </div>
        )
    }

    return (
        <>
            <TasksLayout>
            <div>Задачи</div>
            <div className="max-w-{900px} mx-auto py-10">
                <div className="flex justify-between gap-8">
                    <div className="flex flex-col gap-10 basis-4/5">

                    {tasks?.map((task, idx) => (
                        <TaskItem key={idx} task={task} />
                    ))}

                    </div>
                    <div className="basis-1/5">
                    <div className="text-xs uppercase text-black">
                    Популярное:
                    </div>

                    {/* { popularTasks?.map((popularTask, idx) => (
                        <PopularTask key={idx} task={popularTask} />
                    ))} */}
                    </div>

                </div>

            </div>
            </TasksLayout>

        </>
    )
}
