import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import "./App.css";
import ScrollUtil from "./components/utils/scroll/scrollUtil";
import SocialMedia from "./components/socialMedia";
import Home from "./components/home";
import ProjectGallery from "./components/projectGallery";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main className="container-fluid">
          <div className="row">
            <SocialMedia />
            <Home />
            <ScrollUtil />
            <ProjectGallery />
            <Footer />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
