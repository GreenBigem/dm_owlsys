import Navbar from './navbar/navbar.js'
import Footer from './footer/footer.js'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from '@/src/redux/features/auth/authSlice.js'

export default function Layout({ children }) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className="h-screen">{children}</div>
      <Footer />
    </>
  )
}