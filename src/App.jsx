import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import RestProfile from "./pages/RestProfile";
import Account from "./pages/Account";
import Landpage from "./pages/landpage";
import Sidebar  from "./components/Sidebar";
import Orders from "./pages/Orders";
import Login from './pages/Login'
import OverViewChart from "./pages/OverviewChart";
import Tables from "./pages/Tables";
import Notfound from "./pages/Notfound";
import Client from "./components/Client";
import Overview from "./components/Overview";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Signup />} path="/signup"></Route>
          <Route element={<Menu />} path="/menu"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<RestProfile />} path="/createProfile" />
          <Route element={<Client/>} path="/client" />
          <Route element={<Overview/>} path="/description" />
          <Route element={<Account />} path="/account"></Route>
          <Route element={<OverViewChart />} path="/overview"></Route>
          <Route element={<Orders />} path="/orders"></Route>
          <Route element={<Tables />} path="/tables" />
          <Route element={<Landpage />} path="/"></Route>
          <Route element={<Notfound />} path="*"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
