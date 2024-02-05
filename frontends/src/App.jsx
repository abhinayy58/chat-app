import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { useEffect } from "react";

function App() {
  const {authUser} = useAuthContext();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     authUser
  //   },1000)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // },[])
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to='/signin' />} />
        <Route path="/signin" element={authUser ? <Navigate to='/' /> : <SignIn />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
 