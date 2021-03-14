import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import "./App.css";
import Home from "./components/home";
import ProjectGallery from "./components/projectGallery";
import Footer from "./components/footer";

const App = () => {
  return (
    <main className="container-fluid">
      <Home />
      <ProjectGallery />
      <Footer />
    </main>
  );
};

export default App;
