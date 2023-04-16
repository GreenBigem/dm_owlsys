import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, loginUser } from "@/src/redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()
  const isAuth = useSelector(checkIsAuth)
  const { status } = useSelector((state) => state.auth)
  
  useEffect(() => {
    if (status) toast(status)
    setTimeout(() => {
      if (isAuth) router.push('/')
    }, 1000);
    
  }, [status, isAuth, router])

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }))
      // router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <form onSubmit={e => e.preventDefault()}
          className="w-1/4 h-60 mx-auto mt-40">
          <h1 className="text-lg text-gray-600 text-center">
            Авторизация
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
            >Войти
            </button>
            <Link href={'/register'} className="flex justify-center text-xs text-gray-500 py-2">Не зарегистрированы?</Link>
          </div>
        </form>
      </div>
    </>
  )
}
