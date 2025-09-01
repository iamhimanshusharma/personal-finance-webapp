import { Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import Profile from "./pages/Profile"
import { useState } from "react"
import Home from "./pages/Home";
import SignIn from "./auth/SignIn";
import Login from "./auth/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import Invoice from "./pages/Invoice";
import Cards from "./pages/Cards";
import Activity from "./pages/Activity";
import Email from "./pages/Email";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import HelpAndSupport from "./pages/HelpAndSupport";
import { useEffect } from "react";
import Cookies from "js-cookie"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userCookie = Cookies.get("token");

    if (userCookie) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path="*" element={isLoggedIn ? <MainPage /> : <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={isLoggedIn ? <MainPage /> : <Login />} />
      </Routes>

    </>
  )
}

export default App
