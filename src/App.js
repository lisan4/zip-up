import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-full-height">
          <Header cartItems={cartItems} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route 
                path="/catalog" 
                element={
                  <CatalogPage 
                    cartItems={cartItems} 
                    setCartItems={setCartItems} 
                  />
                } 
              />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;