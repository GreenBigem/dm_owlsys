import s from "./footer.module.css";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div class={s.footer_wrapper}>
        <div class={s.footer_block}>Block</div>
        <div class={s.footer_block}>2</div>
        <div class={s.footer_block}>3</div>
        <div class={s.footer_block}>4</div>
      </div>
    </div>
  );
}
