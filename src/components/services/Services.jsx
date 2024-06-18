import React from "react";

const Services = () => {
  const webDevelopmentServices = [
    {
      title: "Website Design and Development",
      description:
        "Web developers design and build custom websites tailored to meet specific business needs. This includes creating visually appealing layouts, user-friendly interfaces, and responsive designs that work across various devices and screen sizes.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Specialized web development for online stores, including setting up shopping carts, payment gateways, and inventory management systems. This service ensures a seamless and secure shopping experience for customers.",
    },
    {
      title: "Content Management Systems (CMS)",
      description:
        "Developers create and customize CMS platforms like WordPress, Joomla, or Drupal, enabling businesses to easily manage and update their website content without requiring extensive technical knowledge.",
    },
    {
      title: "Web Application Development",
      description:
        "Building complex web applications tailored to specific business processes and needs, such as customer relationship management (CRM) systems, enterprise resource planning (ERP) systems, and custom business tools. These applications are designed to enhance operational efficiency and support business growth.",
    },
  ];

  return (
    <div className="py-6 h-[100vh] flex justify-center items-center flex-col">
      <p className="text-4xl font-bold ">
        <span className="text-white text-7xl">Unique</span> Ideas <br />
        <span className="text-white text-6xl">for your Bussiness</span>
        <button className="px-8 py-2 ml-8 bg-[#D07000] text-2xl font-bold border text-black rounded-2xl">
          What we do
        </button>
      </p>
      <div className="cards grid sm:gird-col-1 grid-cols-4 h-[500px] my-12">
        {webDevelopmentServices.map((services,id) => (
          <div key={id} className="py-12 px-8 col-span-1 flex flex-col border border-white text-white w-96">
            <h1 className="text-4xl pb-4 h-[150px]">{services.title}</h1>
            <p className="text-lg h-[280px]">
          {services.description}
            </p>
            <button className="my-3 px-4 py-2 bg-[#D07000] text-2xl w-auto font-bold border text-black rounded-2xl">
              More Detial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
