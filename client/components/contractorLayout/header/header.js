import { useRouter } from 'next/router'
import axios from 'axios'

export default function Header() {

    const router = useRouter()
    const id = router.query.id

    return (
        <>
            <div className="flex flex-row p-2 m-2 bg-sky-300/100 rounded-lg w-auto">
                <div className='flex flex-row content-center items-center basis-3/12'>
                    <div>
                        <h1>Контрагент ID: {id}</h1>
                    </div>
                </div>
                <div className='flex basis-5/12'>
                    <div className="rounded-lg bg-white dark:bg-slate-900 relative pointer-events-auto">
                        <button type="button" className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
                            <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none">
                                <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </circle>
                            </svg>
                            Быстрый поиск...
                            <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                                Ctrl K
                            </span>
                        </button>
                    </div>
                </div>
                <div className='flex basis-2/12'>
                    <button onClick={CreateNewIndividualContractor} className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
                        Создать Физ. лицо
                    </button>
                </div>
                <div className='flex basis-2/12'>
                    <button onClick={CreateNewEntityContractor} className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg">
                        Создать Юр. лицо
                    </button>
                </div>
            </div>
        </>
    )
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
 