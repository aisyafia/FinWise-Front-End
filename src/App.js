import "./App.css";
import {
  LoginPage,
  PartnersPage,
  HomePage,
  ReadingPage,
  OnePartner,
  SignUp,
} from "./pages";
import { NavBar } from "./components/";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage setter={setFile} getter={file} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/partners/:id" element={<OnePartner />} />
        <Route
          path="/file-translate"
          element={<ReadingPage setter={setFile} getter={file} />}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
