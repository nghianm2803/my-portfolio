import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
// import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Portfolio />

        {/* Replace <Service /> with <Language /> */}
        {/* <Recent Works /> */}
        {/* <Experience include languge  /> */}
        <Contact />
      </main>
    </>
  );
};

export default App;
