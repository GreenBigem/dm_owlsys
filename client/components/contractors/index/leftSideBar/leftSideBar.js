import s from "./leftSideBar.module.css";
import { Link } from "next/link";

export default function LeftSideBar() {
  return (
    <div className={s.left_sidebar}>
      <div className={s.lsb_first_block}></div>
      <div className={s.lsb_first_nav}>
        <div class={s.lsb_nav_button}>button</div>
        <div class={s.lsb_nav_button}>button</div>
        <div class={s.lsb_nav_button}>button</div>
        <div class={s.lsb_nav_button}>button</div>
      </div>
    </div>
  );
}
