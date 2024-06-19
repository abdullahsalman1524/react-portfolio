import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znmnr4q",
        "template_f0hc7tl",
        form.current,
        "yz1VIfHwArWfYf2KL"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="flex h-[100vh] items-center justify-center w-full"
    >
      <div className="flex flex-col gap-4 w-full pl-32">
        <p className="text-7xl pb-16 font-extrabold">Let's Work Together</p>
        <h1 className="text-2xl font-bold">Email: </h1>
        <p className="text-lg text-gray-600">abdullahsalanmardan@gmail.com</p>
        <h1 className="text-2xl font-bold">Phone: </h1>
        <p className="text-lg text-gray-600">03444599930</p>
      </div>
      <div className="flex flex-col w-full">
        <input
          className="text-white bg-transparent border border-white h-[50px] w-[70%] mb-5 px-2"
          placeholder="Name"
          name=""
          type="text"
          id=""
        ></input>
        <input
          className="text-white bg-transparent border border-white h-[50px] w-[70%] mb-5 px-2"
          placeholder="Email"
          type="email"
          name=""
          id=""
        ></input>
        <textarea
          className="text-white bg-transparent border border-white h-32 w-[70%] mb-5 px-2"
          placeholder="Description"
          name=""
          id=""
        ></textarea>
        <button
          type="submit"
          className="my-3 px-4 py-2 bg-[#D07000] text-2xl w-[70%] font-bold border text-black rounded-2xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
