import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/homepage";
import NetPage from "./pages/netPage";
import JobsPage from "./pages/jobpage";
import SignInPage from "./pages/signinpage";
import MassagePage from "./pages/MassagePage";
import StartPage from "./pages/startPage";
import Premium from "./pages/premiumpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/feed" element={<HomePage />} />
          <Route path="/mynetwork" element={<NetPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/messaging" element={<MassagePage />} />
          <Route path="/" element={<StartPage />} />
          <Route path="/premium" element={<Premium/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
