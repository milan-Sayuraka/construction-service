import Sidebar from './components/sidebar/sidebar'
import Topbar from "./components/topbar/topbar";
import "./App.css";
import React from 'react'
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transactions from "./pages/transactions/transactions"
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes >
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/transactions" element={<Transactions />}>
          </Route>
        </Routes >
      </div>
    </Router>
  );
}
export default App;