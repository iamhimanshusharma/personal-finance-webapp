import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import Home from "./pages/Home";
import Login from "./auth/Login";
import SignIn from "./auth/SignIn";
import MainPage from "./MainPage";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import Invoice from "./pages/Invoice";
import Cards from "./pages/Cards";
import Activity from "./pages/Activity";
import Email from "./pages/Email";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import HelpAndSupport from "./pages/HelpAndSupport";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useContext(UserContext);

  return loggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  const { login, logout } = useContext(UserContext);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/user/me`,
          {
            credentials: "include",
          }
        );

        if (res.ok) {
          login();
        } else {
          logout();
        }
      } catch {
        logout();
      }
    };

    checkAuth();
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />

      {/* Protected App */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="payment" element={<Payment />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="cards" element={<Cards />} />
        <Route path="activity" element={<Activity />} />
        <Route path="email" element={<Email />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="helpandsupport" element={<HelpAndSupport />} />
      </Route>

      {/* Extra Protected Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
