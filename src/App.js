import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);
  const handleThemeChange = () => {
		setTheme(!theme)
		window.localStorage.setItem("theme",!theme)
	}
  return (
    <div className="" data-theme={theme && "dark"}>
      <Navbar handleThemeChange={handleThemeChange} theme={theme} ></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
