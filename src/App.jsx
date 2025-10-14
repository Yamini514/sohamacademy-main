import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import UserRoutes from "../src/UserRoutes"
import Header from "./pages/Header";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <UserRoutes /> 
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
