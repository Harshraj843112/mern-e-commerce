import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import SignUp from "../Components/LogIn/Signup";
import SignIn from "../Components/LogIn/Signin";
import Error from "../Components/Pages/Error";
import Dashboard from "../Components/Admin Dashboard/Dashboard";
import VerifyEmail from "../Components/LogIn/VerifyEmail";
import PasswordReset from "../Components/LogIn/PasswordReset";
import Cart from "../Components/User/Cart"
import Wishlist from "../Components/User/Wishlist"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/users/:userId/verify/:token" element={<VerifyEmail />} />
      <Route
        path="/users/:userId/forgot-password/:token"
        element={<PasswordReset />}
      />
    </Routes>
  );
};

export default AllRoutes;
