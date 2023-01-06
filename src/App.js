import "./App.css";
import {
  LoginPage,
  PartnersPage,
  HomePage,
  ReadingPage,
  OnePartner,
} from "./pages";
import { NavBar } from "./components/";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/partners/:id" element={<OnePartner />} />
        <Route path="/file-translate" element={<ReadingPage />} />
      </Routes>
    </div>
  );
}

export default App;
