import Navbar from './navbar/navbar.js'
import Footer from './footer/footer.js'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from '@/src/redux/features/auth/authSlice.js'

import s from './layout.module.css'
import { Main } from 'next/document';

export default function Layout({ children }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (<div className={s.wrapper}>
    <div className={s.header}><Navbar /></div>
    <div className={s.main}>{children}</div>
    <div className={s.footer}><Footer /></div>
  </div>)
}