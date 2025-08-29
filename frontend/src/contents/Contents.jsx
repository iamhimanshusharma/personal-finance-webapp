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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Contents = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/email" element={<Email />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/helpandsupport" element={<HelpAndSupport />} />
            </Routes>
        </>
    )
}

export default Contents