import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-blue-100">
      <Header/>
      <Home/>
    <Gallery/>
    <Contact/>
      <Footer />
    </div>
  );
}

export default App;
