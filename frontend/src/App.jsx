import { Navigate, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import Profile from "./pages/Profile"
import { useContext, useState } from "react"
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
import { UserContext } from "./contexts/UserContext";
import Test from "./pages/Test";

const ProtectedRoute = ({ children }) => {
  const { loggedIn, login, logout } = useContext(UserContext);
  return loggedIn ? children : <Navigate to="/" replace />;
};

function App() {
  const { loggedIn, login, logout } = useContext(UserContext);

  useEffect(() => {
    const userCookie = Cookies.get("token");

    if (userCookie) {
      login();
    }
  }, []);

  return (
    <>
      <Routes>
        {!loggedIn && (
          <>
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<SignIn />} />
          </>
        )}

        <Route
          path="/"
          element={
            loggedIn ? (
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            ) : (
              <Home />
            )
          }
        >
          {loggedIn && (
            <>
              <Route index element={<Dashboard />} />
              <Route path="payment" element={<Payment />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="cards" element={<Cards />} />
              <Route path="activity" element={<Activity />} />
              <Route path="email" element={<Email />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
              <Route path="test" element={<Test />} />
              <Route path="helpandsupport" element={<HelpAndSupport />} />
            </>
          )}
        </Route>

        {
          loggedIn && (
            <>
              <Route path="profile" element={<Profile />} />
              <Route path="signin" element={<Navigate to="/" />} />
              <Route path="login" element={<Navigate to="/" />} />
            </>
          )
        }

        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
