import React from "react";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
import Sidebar from "./components/navbar/Sidebar";

const App = () => {
  return (
    <div>
      <section id="Home Page">
        <Navbar />
      </section>
      <section id="Services">App1</section>
      <section id="Portfolio">App2</section>
      <section id="Contact Us">App3</section>
      <section id="About">App3</section>


      {/* <Test/> */}
    </div>
  );
};

export default App;
