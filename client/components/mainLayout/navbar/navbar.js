import { useSelector } from "react-redux";
import Avatar from "./avatar/avatar";
import Logo from "./logo/logo";
import MainMenu from "./mainMenu/mainMenu";
import UserMenu from "./userMenu/userMenu";
import { checkIsAuth } from "@/src/redux/features/auth/authSlice";
import s from "./navbar.module.css";

export default function NavBar() {
  const isAuth = useSelector(checkIsAuth);

  return (
    <div className={s.header}>
      <div className={s.header_wrapper}>
        <div className={s.header_logo}>
          <Logo />
        </div>
        <div className={s.header_mainmenu}>{isAuth && <MainMenu />}</div>
        <div className={s.header_avatar}>
          <Avatar />
        </div>
        <div className={s.header_usermenu}>
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
