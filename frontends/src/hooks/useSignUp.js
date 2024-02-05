import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { authUser ,setAuthUser} = useAuthContext()

  const signUp = async ({
    fullname,
    username,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullname,
      username,
      email,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          username,
          email,
          password,
          confirmPassword,
          gender,
        }),
      });
      
      const data = await res.json();
      if(data.error){
        throw new Error(data.error) 
      }
      localStorage.setItem("chat-app",JSON.stringify(data));
      setAuthUser(data)

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading,signUp}
};

export default useSignUp;

function handleInputError({
  fullname,
  username,
  email,
  password,
  confirmPassword,
  gender,
}) {
  if (
    !fullname ||
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("password and confirm password should be same");
    return false;
  }
  if (password.length < 6) {
    toast.error("password should be at least 6 characters");
    return false;
  }
  return true;
}
