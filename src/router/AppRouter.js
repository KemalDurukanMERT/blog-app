import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Blogs from "../Pages/Blogs";
import BlogDetail from "../components/BlogArea/BlogDetail"
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogs" element={<PrivateRouter/>}>
          <Route path="" element={<Blogs/>}/>
        </Route>
        <Route path="blogs/:id" element={<PrivateRouter/>}>
          <Route path="" element={<BlogDetail/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
