import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { checkIsAuth, registerUser } from "@/src/redux/features/auth/authSlice"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

export default function Register() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)
  const router = useRouter()
  const isAuth = useSelector(checkIsAuth)

  useEffect(() => {
    if (status) toast(status)
    if (isAuth) router.push('/')
  }, [status, isAuth, router])

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }))
      setPassword('')
      setUsername('')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}
          className="w-1/4 h-60 mx-auto mt-40">
          <h1 className="text-lg text-gray-600 text-center">
            Регистрация
          </h1>
          <label className="text-xs text-gray-500">
            Username:
            <input type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 test-xs outline-none placeholder:text-gray-500"
            ></input>
          </label>
          <label className="text-xs text-gray-500">
            Password:
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 test-xs outline-none placeholder:text-gray-500"
            ></input>
          </label>
          <div className="flex gap-8 justify-center mt-4">
            <button type="submit"
              onClick={handleSubmit}
              className="flex justify-center bg-slate-500 items-center text-xs text-white rounded-sm py-2 px-4"
            >Зарегистрироваться
            </button>
            <Link href={'/login'} className="flex justify-center text-xs text-gray-500 py-2">Есть аккаунт?</Link>
          </div>
        </form>
      </div>
    </>
  )
}
