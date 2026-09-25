import { useState, useEffect } from "react";
import SettingsItem from "../components/SettingsItem";
import { useNavigate } from "react-router-dom";
import { deleteAllTransactions } from "../services/transactionApi";
import {
  FaUserCircle,
  FaPalette,
  FaRupeeSign,
  FaBell,
  FaShieldAlt,
  FaInfoCircle,
  FaTrash,
  FaSignOutAlt,
} from "react-icons/fa";



  function Settings() {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate();

useEffect(() => {
  const fetchProfile = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      setUser(data);
    }
  };

  fetchProfile();
}, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };



  return (
    <main className="flex-1 p-8">

      <h1 className="text-3xl font-bold">
        ⚙️ Settings
      </h1>

      <p className="text-gray-500 mt-2">
        Manage your account and application preferences.
      </p>


      <div className="bg-white rounded-xl shadow-md mt-8 p-6 hover:shadow-lg transition ">

        <div className="flex items-center">

          <div className="w-16 h-16 rounded-full bg-blue-600 text-white
          flex items-center justify-center text-2xl font-bold">

           {user ? user.firstName.charAt(0) : "U"}

          </div>

          <div className="ml-5 flex-1">

            <h2 className="text-xl font-semibold text-gray-900">
              {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
            </h2>

            <p className="text-gray-500: text-gray-400">
              Personal Finance Dashboard
            </p>

          </div>

          
        </div>

      </div>

      {/* General */}

      <div className="bg-white rounded-xl shadow-md mt-8 overflow-hidden">

   

        <SettingsItem
          icon={<FaRupeeSign />}
          title="Currency"
          value="INR (₹)"
        />

        <SettingsItem
          icon={<FaBell />}
          title="Notifications"
          toggle
          checked={notifications}
          onToggle={() =>
            setNotifications(!notifications)
          }
        />

        <SettingsItem
          icon={<FaShieldAlt />}
          title="Security"
        />

       <SettingsItem
  icon={<FaInfoCircle />}
  title="About"
  onClick={() => navigate("/about")}
/>

 <SettingsItem
  icon={<FaSignOutAlt />}
  title="Logout"
  onClick={handleLogout}
/>

      </div>

      {/* Danger Zone */}

      <div className="mt-10">

        <h2 className="text-red-600 font-semibold mb-3">
          Danger Zone
        </h2>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">

         <SettingsItem
  icon={<FaTrash />}
  title="Clear All Transactions"
  danger={true}
  onClick={async () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete all transactions?"
  );

  if (!confirmed) return;

  try {
    const response = await deleteAllTransactions();

    if (response.message === "All transactions deleted successfully") {
      alert("All transactions deleted successfully.");
      window.location.reload();
    } else {
      alert("Failed to delete transactions.");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to delete transactions.");
  }
}}
/>

        </div>

      </div>

    </main>
  );
}

export default Settings;