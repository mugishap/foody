import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import Account from "./pages/Account";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<Menu />} path="/menu"></Route>
        <Route element={<Account />} path="/account"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
