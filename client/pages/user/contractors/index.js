import TasksLayout from "@/components/tasksLayout/tasksLayout";
// import { TaskItem } from "./index/taskItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllContractors } from "@/src/redux/features/contractor/contractorSlice";
import Link from "next/link";
import Header from "@/components/contractorLayout/header/header";
import SideBar from "@/components/contractorLayout/sidebar/sidebar";
import Moment from 'react-moment'
import s from './contractors.module.css'

export default function Index() {

  const dispatch = useDispatch()
  const { contractors } = useSelector((state) => state.contractor)

  useEffect(() => {
    dispatch(getAllContractors())
  }, [dispatch])

  if (!contractors) {
    return (
      <div className="text-xl text-black text-center py-10">
        Контрагентов пока нет.
        <Link href={'/user/contractors/create'} className="flex justify-center text-xs text-gray-500 hover:text-gray-800 py-2">Хотите создать?</Link>
      </div>
    )
  }

  return (
    <>
    <div className={s.left_sidebar}>LSB</div>
    <div className={s.content}>
    <div className='flex flex-col'>
          <div className="flex">
            Контрагенты.
          </div>
          <p className="text-xs">Нажмите на контрагента, чтобы перейти к редактированию.</p>
          <div className="flex flex-col">
            {
              contractors?.map((contractor, idx) => (
                <div className="grow my-2">
                  <Link href={`/user/contractors/${contractor._id}`} key={idx}>
                    {
                      <div className="flex">
                        <div className="flex w-full bg-gray-200 hover:bg-gray-500 rounded-md">
                          <div className="px-2 py-1">
                            {contractor.surname}
                          </div>
                          <div className="px-2 py-1">
                            {contractor.name}
                          </div>
                          <div className="px-2 py-1">
                            <Moment date={contractor.createdAt} format='D MM YYYY' />
                          </div>
                        </div>
                        <div className="flex justfy-between justify-center">
                        </div>
                      </div>
                    }</Link>
                </div>
              ))
            }
          </div>
        </div>      
    </div>
    <div className={s.right_sidebar}>
      <div>
        <h1>Возможности:</h1>
      </div>
      {/* <div> */}
        {/* <InstantSearch /> */}
      {/* </div> */}
      <div>
        <Link href="/user/contractors/create_ic" className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
          Создать Физ. лицо
        </Link>
      </div>
      <div>
        <Link href="/user/contractors/create_ec" className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
          Создать Юр. лицо
        </Link>
      </div>
    </div>
</>
  )
}


