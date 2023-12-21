import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import SearchBar from "./components/SearchBar";
const apiKey = import.meta.env.VITE_API_KEY;
function App() {
  return (
    <>
      <AboutPage />
      <h1>PERSONAGGI INFLUENTI</h1>
      <HomePage />
    </>
  );
}

export default App;
