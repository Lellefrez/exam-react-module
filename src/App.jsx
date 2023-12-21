import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SearchBar from "./components/SearchBar";
import SearchPage from "./components/SearchPage";
import { NavLink, Route, Routes } from "react-router-dom";
import PersonPage from "./components/PersonPage";
const apiKey = import.meta.env.VITE_API_KEY;
function App() {
  return (
    <>
      <nav>
        <menu>
          <ul>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/search">
                Search
              </NavLink>
            </li>
          </ul>
        </menu>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/person">
          <Route index element={<PersonPage />} />
          <Route path=":id" element={<PersonPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
