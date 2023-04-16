import '@/styles/globals.css'

import Layout from '@/components/mainLayout/layout'

import { Provider } from 'react-redux'
import { store } from '../src/redux/store.js'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



export default function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer position='bottom-right' />
      </Layout>
    </Provider>
  )
}


