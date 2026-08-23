import { useState } from "react";
import SettingsItem from "../components/SettingsItem";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaPalette,
  FaRupeeSign,
  FaBell,
  FaShieldAlt,
  FaInfoCircle,
  FaTrash,
  FaChevronRight,
} from "react-icons/fa";

function Settings() {

  const userName = "Guest User";
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate();



  return (
    <main className="flex-1 p-8">

      <h1 className="text-3xl font-bold">
        ⚙️ Settings
      </h1>

      <p className="text-gray-500 mt-2">
        Manage your account and application preferences.
      </p>


      <div className="bg-white rounded-xl shadow-md mt-8 p-6 hover:shadow-lg transition cursor-pointer">

        <div className="flex items-center">

          <div className="w-16 h-16 rounded-full bg-blue-600 text-white
          flex items-center justify-center text-2xl font-bold">

           {userName.charAt(0)}

          </div>

          <div className="ml-5 flex-1">

            <h2 className="text-xl font-semibold text-gray-900">
              {userName}
            </h2>

            <p className="text-gray-500: text-gray-400">
              Personal Finance Dashboard
            </p>

          </div>

          <FaChevronRight className="text-gray-400"/>

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
          />

        </div>

      </div>

    </main>
  );
}

export default Settings;