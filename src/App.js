import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import loader from "./components/utils/loader/Loader.min.svg";

const Home = React.lazy(() => import("./components/home"));
const AboutMe = React.lazy(() => import("./components/aboutMe"));
const Content = React.lazy(() => import("./components/content"));
const Footer = React.lazy(() => import("./components/footer"));

const App = () => {
  return (
    <main className="container-fluid">
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "30vh" }}>
            <img src={loader} alt="loading..." />
          </div>
        }
      >
        <Home />
        <AboutMe />
        <Content />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
