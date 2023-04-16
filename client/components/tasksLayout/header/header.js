import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {

    const router = useRouter()
    const id = router.query.id

    const createTask = () => {
        router.push('tasks/create')
    }

    return (
        <>
            <div className="flex flex-row p-2 m-2 bg-sky-300/100 rounded-lg w-auto">
                <div className='flex flex-row content-center items-center basis-3/12'>
                    <div>
                        <h1>Задача ID: {id}</h1>
                    </div>
                    {/* <ul>
                    <li>
                        <Link href={`/post/${id}/first-comment`}>First comment</Link>
                    </li>

                </ul> */}
                </div>
                <div className='flex basis-5/12'>
                    <div className="rounded-lg bg-white dark:bg-slate-900 relative pointer-events-auto">

                    </div>
                </div>
                <div className='flex basis-2/12'>
                    <button
                        onClick={createTask}
                        className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
                        Создать Задачу
                    </button>
                </div>
                <div className='flex basis-2/12'>
                    <button className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
                        Создать Проект
                    </button>
                </div>
            </div>
        </>
    )
}