import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Logins from "./pages/Logins";
import Homes from "./pages/Homes";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Quiz from "./pages/Quiz";
function App() {
  const getAccess = useSelector((state) => state.accessLogin);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/logins" element={<Logins />} />
        <Route path="/register" element={<Register />} />
        {getAccess ? (
          <Route path="/quiz" element={<Quiz />} />
        ) : (
          <Route path="/" element={<Homes />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
