// import axios from '../../../src/utils/axios'
import TasksLayout from "@/components/tasksLayout/tasksLayout";

export default function Index() {

    // const getAllTasks = async () => {
    //     const user = await axios.get('/v1/tasks/')
    // }

    // getAllTasks()


    return (
        <>
            <TasksLayout>
            <div>Задачи</div>
            </TasksLayout>

        </>
    )
}
