import Forgotpassword from "./pages/Forgotpassword.jsx";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Transactions from "./pages/Transactions.jsx";
import AICoach from "./pages/AICoach.jsx";
import Settings from "./pages/Settings.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import { TransactionProvider } from "./context/TransactionContext.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

import { Routes, Route, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <TransactionProvider>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </TransactionProvider>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
  path="/forgot-password"
  element={<Forgotpassword />}
/>
<Route path="/reset-password" element={<ResetPassword />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="ai-coach" element={<AICoach />} />
            <Route path="settings" element={<Settings />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
