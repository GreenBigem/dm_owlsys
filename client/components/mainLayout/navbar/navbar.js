import { useSelector } from "react-redux";
import Avatar from "./avatar/avatar";
import Logo from "./logo/logo";
import MainMenu from "./mainMenu/mainMenu";
import UserMenu from "./userMenu/userMenu";
import { checkIsAuth } from "@/src/redux/features/auth/authSlice";


export default function NavBar() {

  const isAuth = useSelector(checkIsAuth)

  return (<div className="flex flex-row py-4 wrap">
    <Logo />
    {
      isAuth && <MainMenu />
    }
    {
      !isAuth && <div className="flex flex-row flex-auto justify-evenly mx-10"></div>
    }
    <Avatar />
    <UserMenu />
  </div>
  )
}