import React from "react";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
import Sidebar from "./components/navbar/Sidebar";

const App = () => {
  return (
    <div >
      <section className="">
        <Navbar />
        {/* <Sidebar /> */}
      </section>
      <section className="">App1</section>
      <section className="">App2</section>
      <section className="">App3</section>
      <section className="">App4</section>
      <section className="">App5</section>
      <section className="">App6</section>


      {/* <Test/> */}
    </div>
  );
};

export default App;
