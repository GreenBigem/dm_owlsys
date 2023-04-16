import Link from "next/link";
import { useRouter } from "next/router";

export default function MainMenu() {

  const router = useRouter()
  const activeLinkColor = "text-red-600"

  return (
    <>
      <div className="flex flex-row flex-auto justify-evenly mx-10">
        <Link 
          href={'/user/dashboard'}
          className={router.pathname.startsWith("/user/dashboard") ? activeLinkColor : ""}>
          Рабочий Стол
        </Link>
        <Link
          href={'/user/cases'}
          className={router.pathname.startsWith("/user/cases") ? activeLinkColor : ""}>
          Кейсы</Link>
        <Link
          href={'/user/bankruptcies'}
          className={router.pathname.startsWith("/user/bankruptcies") ? activeLinkColor : ""}>
          Банкротства</Link>
        <Link
          href={'/user/tasks'}
          className={router.pathname.startsWith("/user/tasks") ? activeLinkColor : ""}>
          Задачи</Link>
        <Link
          href={'/user/finances'}
          className={router.pathname.startsWith("/user/finances") ? activeLinkColor : ""}>
          Финансы</Link>
        <Link
          href={'/user/contractors'}
          className={router.pathname.startsWith("/user/contractors") ? activeLinkColor : ""}>
          Контрагенты</Link>
      </div>
    </>
  )
}