import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import RestProfile from "./pages/RestProfile"
import Account from "./pages/Account";
import Orders from "./pages/Orders";

import OverViewChart from "./pages/OverviewChart";
import Settings from "./pages/Settings";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<Menu />} path="/menu"></Route>
        <Route element={<RestProfile/>} path="/createProfile"/>
        <Route element={<Account />} path="/account"></Route>
        <Route element={<OverViewChart />} path="/overview"></Route>
        <Route element={<Orders/>} path="/orders"></Route>
        <Route element={<OverViewChart />} path="/overview" />

<Route element={<Settings/>} path='/settings'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
