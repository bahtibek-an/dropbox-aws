import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import FilesList from "./components/FileManager/FilesList";
import Layout from "./components/templates/Layout";

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/home/*" element={<FilesList />} />
                <Route path="*" element={<Navigate to="/home" replace/>} />
            </Route>
        </Routes>
    );
}

export default Router;