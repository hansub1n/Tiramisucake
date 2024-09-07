import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Test from "../pages/Test";
import Signup from "../pages/Signup";
import TestResults from "../pages/TestResults";
import Layout from "../components/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/testResults" element={<TestResults />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
