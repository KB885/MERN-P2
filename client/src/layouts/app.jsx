import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
// import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import HeaderTop from "../components/Header/Header";

// Views
import Dashboard from "../views/Dashboard/Dashboard";

export default function App() {
    return (
      <>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Navbar />
        <HeaderTop />
        <main>
            <Dashboard />
        </main>
      </div>
      </>
    );
}
