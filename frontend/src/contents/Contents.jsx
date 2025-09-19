import Dashboard from "../pages/Dashboard"
import Payment from "../pages/Payment"
import Invoice from "../pages/Invoice"
import Cards from "../pages/Cards"
import Activity from "../pages/Activity"
import Email from "../pages/Email"
import Reports from "../pages/Reports"
import Settings from "../pages/Settings"
import HelpAndSupport from "../pages/HelpAndSupport"
import ContentsHeader from "./ContentsHeader"
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
import { useContext, useState } from "react"
import Login from "../auth/Login";
import MainPage from "../MainPage"
import App from "../App"
import { UserContext } from "../contexts/UserContext"

const Contents = () => {

    return (
        <>
            <Outlet />
        </>
    )
}

export default Contents