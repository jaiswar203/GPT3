import React from "react";

import {
  Blog,
  Footer,
  Header,
  
  WhatGPT3,
  Possibility,
} from "./containers";
import { Navbar, Brand, CTA } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
