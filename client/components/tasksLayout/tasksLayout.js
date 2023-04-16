import Header from "./header/header"

export default function TasksLayout({ children }) {
  return (
    <>
      <div className='flex flex-col'>
        <Header />
        <div className='flex flex-row'>
          <div className='basis-2/12'>
            {/* <SideBar /> */}
          </div>
          <div className='basis-10/12'>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}

