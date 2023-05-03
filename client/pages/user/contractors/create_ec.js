import SideBar from '@/components/contractorLayout/sidebar/sidebar'
import Header from '@/components/contractorLayout/header/header'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { createContractor } from '@/src/redux/features/contractor/contractorSlice'

export default function Index() {
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const dispatch = useDispatch()
    const router = useRouter()

    const submitHandle = () => {

        try {
            const data = new FormData()
            data.append('surname', surname)
            data.append('name', name)
            dispatch(createContractor(data))
            .then((result) => {
                    const idToPush = result.payload.newContractor._id
                    router.push(`/user/contractors/${idToPush}`)
                  });
            

        } catch (error) {
            console.log(error);
        }
    }

    const clearFormHandler = () => {
        setSurname(''),
        setName(''),
        setPatronymic(''),
        router.push('/user/contractors/')
    }

    return (
        <>
            <div className='flex flex-col'>
                <Header />
                <div className='flex flex-row'>
                    <div className='basis-2/12'>
                        {/* <SideBar /> */}
                    </div>
                    <div className='basis-8/12'>
                        <div className="flex justify-center p-5 m-2 bg-sky-500/100 rounded-lg w-auto content-center">
                                <form className="grid justify-items-stretch" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid gap-8 mb-6 md:grid-cols-3">
                                        <div>
                                            <label htmlFor="Фамилия" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Орг.-правовая форма (кр. форма)
                                            </label>
                                            <input type="text"
                                            value={surname}
                                            onChange={(e) => setSurname(e.target.value)}
                                            id="surname"
                                            className="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ООО, ЗАО, АО, ПАО и т.д." required />
                                        </div>
                                        <div>
                                            <label htmlFor="name"className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Полное наименование
                                            </label>
                                            <input type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Краткое наименование"/>
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                ИНН
                                            </label>
                                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ИНН"/>
                                        </div>
                                    </div>
                                    <button type="submit" onClick={submitHandle} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-self-end">Создать</button>
                                </form>
                        </div>
                    </div>
                    <div className='basis-2/12'>
                        {/* <div className="flex p-5 m-2 bg-sky-300/50 rounded-lg w-auto">
                            <div>Right SideBar</div>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}