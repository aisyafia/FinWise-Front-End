import "./App.css";
import { LoginPage, PartnersPage, HomePage } from "./pages";
import { NavBar } from "./components/";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Pay-Slip-and-Slide</h1>;
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
    </div>
  );
}

export default App;
