import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe } from "@/src/redux/features/auth/authSlice.js";

// Modules
import Navbar from "./navbar/navbar.js";
import Footer from "./footer/footer.js";

// Styles
import s from "./layout.module.css";

export default function Layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <Navbar />
      <div className={s.main}>{children}</div>
      <Footer />
    </div>
  );
}
