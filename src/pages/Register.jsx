import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Attach event listener when the component mounts
    const handleBeforeUnload = () => {
      // Cleanup: Remove stored data from localStorage
      localStorage.removeItem("userEmail");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Detach event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Assuming both email and password are valid, store in localStorage
    localStorage.setItem("userEmail", email);

    // Redirect to the homepage
    navigate("/main");
  };

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center dark:bg-gray-900 bg-[#dddee7]">
      <div
        className={`form-container  mt-[13vh] w-[380px] h-[440px]  bg-[#7e84ad]`}
      >
        <form
          className="absolute inset-[2px] rounded-[8px]  dark:bg-[#d3b9b9] z-[10] flex flex-col py-[60px] px-[50px]"
          onSubmit={handleLogin}
        >
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            WELCOME
          </h2>

          <div className="relative z-0 w-full mb-6 group focus">
            <input
              name="floating_email"
              type="email"
              className="peer"
              placeholder=" "
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_password"
              type="password"
              className="peer"
              placeholder=" "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button className="btn-danger" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
