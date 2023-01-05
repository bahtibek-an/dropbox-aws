import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {

    return (
        <div>
            <header className="header">
                <Header/>
            </header>
            <main className="container mx-auto">
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;