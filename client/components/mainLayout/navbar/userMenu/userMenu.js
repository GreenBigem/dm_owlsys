import Link from "next/link";
import { checkIsAuth, logout } from "@/src/redux/features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


export default function UserMenu() {

  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const router = useRouter()

  const logoutHandler = () => {
    dispatch(logout)
    window.localStorage.removeItem('token')
    toast('Вы вышли из системы.')

    setTimeout(() => {
      router.push('/')
      router.reload()
    }, "1000");


  }

  return (
    <>
      <div className="flex flex-row justify-evenly items-center basis-1/12">

        {
          !isAuth && <>
            <div className="row flex justify-center items-center bg-gray-600 hover:bg-gray-900 text-xs text-white rounded-sm px-4 py-2">
              <Link href={'/login'}>Логин</Link>
            </div>
            <div className="row flex justify-center items-center bg-gray-600 hover:bg-gray-900 text-xs text-white rounded-sm px-4 py-2 my-1 mx-1">
              <Link href={'/register'}>Регистрация</Link>
            </div>
          </>
        }

        {
          isAuth && <>
            <div className="row flex justify-center items-center bg-gray-600 hover:bg-gray-900 text-xs text-white rounded-sm px-4 py-2">
              <button onClick={logoutHandler}>Выйти</button>
            </div>
          </>
        }

      </div>
    </>
  )
}