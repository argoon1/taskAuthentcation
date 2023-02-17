import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./navigation/Navigation";
import { AuthContextProvider } from "./context/AuthContext";
import { Navbar } from "./components/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Navigation />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
