import Content from '@/components/contractorLayout/content/content'
import SideBar from '@/components/contractorLayout/sidebar/sidebar'
import Header from '@/components/contractorLayout/header/header'

export default function NotAdultData() {

    return (
        <>
            <div className='flex flex-col'>
                <Header />
                <div className='flex flex-row'>
                    <div className='basis-2/12'>
                        <SideBar />
                    </div>
                    <div className='basis-10/12'>
                        <div className="flex p-5 m-2 bg-sky-500/100 rounded-lg h-96 w-auto">
                            <div>Not Adult Content</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}