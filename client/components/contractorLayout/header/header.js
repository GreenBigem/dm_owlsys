import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Modal from './modal'
import Link from 'next/link'
import InstantSearch from '@/components/InstantSearch'
import s from './header.module.css'

export default function Header() {

  const router = useRouter()
  const id = router.query.id
  const [isModal, setModal] = React.useState(false);

  return ( 
  <div>
      <div>
        <h1>Контрагент ID: {id}</h1>
      </div>
      <div>
        {/* <InstantSearch /> */}
      </div>
      <div>
        <Link href="/user/contractors/create_ic" className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
          Создать Физ. лицо
        </Link>
      </div>
      <div>
        <Link href="/user/contractors/create_ec" className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
          Создать Юр. лицо
        </Link>
        {/* <button onClick={() => setModal(true)}>Click</button> */}
      </div>

      {/* <Modal
        isVisible={isModal}
        title="Создать контрагента - Физ. лицо"
        content={
          <p>Физ. лицо</p>
        }

        footer={<div className='flex justify-between'>
          <div className='row px-10 py-2 hover:bg-slate-100'>
            <button>Сохранить</button>
          </div>
          <div
            className='row px-10 py-2 hover:bg-slate-100'
            onClick={() => setModal(false)}
          >
            <button>Отменить</button>
          </div>
        </div>
        }
        onClose={() => setModal(false)}
      /> */}
    </div>)
}

export async function CreateNewIndividualContractor() {

  axios.post('http://localhost:5000/api/user/contractors/create', {
    surname: 'Новый',
    name: 'Контрагент',
    is_individual: true
  })
    .then(function (response) {
      console.log(response);
      const wayToRedirect = `http://localhost:5000/api/user/contractors/${response.data.id}`
      res.redirect(201, wayToRedirect)

    })
    .catch(function (error) {
      console.log(error);
    });

}

export async function CreateNewEntityContractor() {

  axios.post('http://localhost:5000/api/user/contractors/create', {
    // surname: 'Новый',
    // name: 'Контрагент',
    is_individual: false
  })
    .then(function (response) {
      console.log(response);
      const wayToRedirect = `http://localhost:5000/api/user/contractors/${response.data.id}`
      res.redirect(201, wayToRedirect)

    })
    .catch(function (error) {
      console.log(error);
    });

}
