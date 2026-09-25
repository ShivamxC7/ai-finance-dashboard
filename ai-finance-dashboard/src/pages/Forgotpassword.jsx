import { useState } from "react";
import { Link } from "react-router-dom";

function Forgotpassword(){
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log("Forgot password submitted", email);

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/auth/forgot-password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),    
            }
        );
        const data = await response.json();
        console.log("Forgot password response:", response.status, data);
        if(response.ok) {
            setMessage("Password reset request sent successfully");
        } else {
            setMessage(data.message);
        }
    };
    return(<>
<div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center">
          Forgot Password?
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Enter your email to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Reset Password
          </button>
        </form>

        {message && (
          <p className="text-center text-gray-600 mt-5">
            {message}
          </p>
        )}

        <p className="text-center text-gray-500 mt-6">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>

    </>);
}

export default Forgotpassword;