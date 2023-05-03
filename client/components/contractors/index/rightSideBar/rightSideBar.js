import s from "./rightSideBar.module.css";

export default function RightSideBar() {
  return (
    <div className={s.right_side_bar}>
      <div className={s.rsb_first_block}>Info</div>
      <div className={s.rsb_nav}>
        <div className={s.rsb_nav_button}>Link</div>
        <div className={s.rsb_nav_button}>Link</div>
        <div className={s.rsb_nav_button}>Link</div>
        <div className={s.rsb_nav_button}>Link</div>
        <div className={s.rsb_nav_button}>Link</div>
      </div>
      <div className={s.rsb_first_block}>Additional info</div>
      <div className={s.rsb_nav}>
        <div className={s.rsb_nav_button}>Option</div>
        <div className={s.rsb_nav_button}>Option</div>
        <div className={s.rsb_nav_button}>Option</div>
        <div className={s.rsb_nav_button}>Option</div>
        <div className={s.rsb_nav_button}>Option</div>
      </div>
    </div>
  );
}
