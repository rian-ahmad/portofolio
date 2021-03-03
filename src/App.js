import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import "./App.css";
import Home from "./components/home";
import ProjectGallery from "./components/projectGallery";
import Footer from "./components/footer";
import { ScrollContainer } from "react-scroll-motion";

class App extends Component {
  state = {};
  render() {
    return (
      <ScrollContainer>
        <main className="container-fluid">
          <div className="row">
            <Home />
            <ProjectGallery />
            <Footer />
          </div>
        </main>
      </ScrollContainer>
    );
  }
}

export default App;
