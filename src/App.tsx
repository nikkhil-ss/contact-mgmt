import React from "react";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/NavBar";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Home from "./components/Home";
import ContactDetails from "./components/ContactDetails";
import ChartPage from "./components/ChartPage";
import ChartCovid from "./components/ChartCovid";
import CovidTime from "./components/CovidGraph";
import CovidGraph from "./components/CovidWorld";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/add" element={<Add />} />

        <Route path="/edit/:id" element={<Edit />}></Route>

        <Route path="/contact" element={<ContactDetails />}></Route>

        <Route path="/ChartPage" element={<ChartPage />}></Route>
        <Route path="/chartCovid" element={<ChartCovid/>} ></Route>
        <Route path="/CovidTime" element={<CovidTime/>} ></Route>
        <Route path="/covidWorld" element={<CovidGraph/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
