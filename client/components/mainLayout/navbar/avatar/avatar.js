import { useSelector } from "react-redux"
import { checkIsAuth } from "@/src/redux/features/auth/authSlice"

export default function Avatar() {

  const isAuth = useSelector(checkIsAuth)

  return (
    <>
      {
        isAuth && <div className="flex justify-evenly items-center basis-1/12">Avatar</div>
      }

      {/* {
        !isAuth && <div className="flex justify-evenly basis-1/12"></div>
      } */}

    </>
  )
}