import {BrowserRouter, Routes, Route} from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import NavBar from "./components/NavBar";
import React from "react";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";


function App() {
  return (
    <BrowserRouter>
  <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/loginPage" element={<LoginPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
