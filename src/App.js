import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import { useEffect, useState } from "react";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import NotFound from "./Pages/Shared/NotFound";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Reviews from "./Pages/Reviews/Reviews";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./Pages/Login/ResetPassword";

const override = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);
  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div className="" data-theme={theme && "night"}>
      {loading ? (
        <HashLoader loading={loading} size={75} css={override} />
      ) : (
        <Navbar handleThemeChange={handleThemeChange} theme={theme}></Navbar>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
