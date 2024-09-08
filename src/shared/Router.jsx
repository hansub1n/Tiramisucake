import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Test from "../pages/Test";
import Signup from "../pages/Signup";
import TestResults from "../pages/TestResults";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/test"
                        element={
                            <ProtectedRoute>
                                <Test />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/testResults"
                        element={
                            <ProtectedRoute>
                                <TestResults />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
