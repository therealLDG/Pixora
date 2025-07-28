import React from "react";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import { Route, Routes } from "react-router";
import Create from "./pages/create/Create";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import "./App.css"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </>
  );
}
