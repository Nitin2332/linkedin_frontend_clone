import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/homepage";
import NetPage from "./pages/netPage";
import JobsPage from "./pages/jobpage";
import SignInPage from "./pages/signinpage";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/network" element={<NetPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
