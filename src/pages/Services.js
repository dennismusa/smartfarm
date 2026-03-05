// Services.js
import React, { useState, useEffect } from "react";
//import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import farm3 from "../assets/farm3.jpg";
import farm4 from "../assets/farm4.jpg";
//import farm5 from "../assets/farm5.jpg";
//import farm6 from "../assets/farm6.jpg";
//import farm7 from "../assets/farm7.jpg";
import drip1 from "../assets/drip1.jpg";
import drip2 from "../assets/drip2.jpg";
import dripinstallation from "../assets/dripinstallation.jpg";
import dripinstallation2 from "../assets/dripinstallation2.jpg";
import sprinkler from "../assets/sprinkler.jpg";
import sprinkler2 from "../assets/sprinkler2.jpg";
import dripplumbing from "../assets/dripplumbing.jpg";
import dripplumbing1 from "../assets/dripplumbing1.jpg";
import gardenwatering from "../assets/gardenwatering.jpg";
import gardenwatering2 from "../assets/gardenwatering2.jpg";
import greenhouse1 from "../assets/greenhouse1.jpg";
import greenhousewatering2 from "../assets/greenhousewatering2.jpg";

  

import { FaTint, FaMicrochip, FaWrench, FaSprayCan, FaSeedling, FaTools, FaLeaf, FaIndustry } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Service Card with Image Slider
function ServiceCard({ images, icon, title, desc, features }) {
  const [current, setCurrent] = useState(0);

  // Slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 overflow-hidden group relative"
    >
      {/* Image slider */}
      <div className="h-56 w-full overflow-hidden relative rounded-t-xl">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} ${idx + 1}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Card content */}
      <div className="p-6 text-center md:text-left">
        <div className="text-green-600 text-4xl mb-3 flex justify-center md:justify-start">{icon}</div>
        <h4 className="text-2xl font-bold mb-3 text-green-700 hover:text-green-800 transition-colors">
          {title}
        </h4>
        <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
        {features && (
          <ul className="mt-3 text-gray-600 text-sm space-y-1">
            {features.map((feat, idx) => (
              <li key={idx}>✅ {feat}</li>
            ))}
          </ul>
        )}
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

// Main Services Component
export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      images: [dripinstallation,dripinstallation2],
      icon: <FaTint />,
      title: "Drip Irrigation Systems",
      desc: "Design and installation of efficient drip irrigation networks tailored to your farm's specific crop needs. Minimize water waste while maximizing crop yield and soil health.",
      features: ["Up to 60% water savings", "Custom layouts for crops", "Long-lasting setup"],
    },
    {
      images: [farm2, farm3],
      icon: <FaMicrochip />,
      title: "Smart Sensors & IoT",
      desc: "Deploy cutting-edge sensors to monitor soil moisture, temperature, humidity, and crop growth in real-time. Data-driven insights help you make precise farming decisions.",
      features: ["Real-time monitoring", "Mobile app integration", "Alerts & notifications"],
    },
    {
      images: [farm3, farm4],
      icon: <FaLeaf />,
      title: "Farm Consulting",
      desc: "Professional guidance on sustainable farming practices, crop rotation, pest management, and resource optimization to improve productivity and reduce costs.",
      features: ["Expert advice", "Sustainable practices", "Increased yields"],
    },
    {
      images: [sprinkler, sprinkler2],
      icon: <FaSprayCan />,
      title: "Sprinkler Installation",
      desc: "Expert setup of automated sprinkler systems for lawns, gardens, and fields. Ensure uniform water distribution with minimal manual effort.",
      features: ["Automated watering", "Custom coverage", "Time-saving"],
    },
    {
      images: [dripplumbing,dripplumbing1],
      icon: <FaWrench />,
      title: "Plumbing Services",
      desc: "Reliable plumbing solutions for water pipelines, irrigation networks, and drainage systems. Installation, maintenance, and repairs done efficiently and professionally.",
      features: ["Pipeline installation", "Leak repair", "Maintenance service"],
    },
    {
      images: [gardenwatering, gardenwatering2],
      icon: <FaSeedling />,
      title: "Garden Watering Solutions",
      desc: "Custom solutions for maintaining healthy gardens using automated and semi-automated watering systems. Perfect for both small-scale and commercial landscapes.",
      features: ["Automated or manual", "Efficient water usage", "Healthy plants"],
    },
    {
      images: [drip1,drip2],
      icon: <FaTools />,
      title: "Drip Irrigation Setup",
      desc: "Complete installation of high-efficiency drip irrigation lines, emitters, and controllers. Designed to maximize water efficiency and crop performance over time.",
      features: ["Precision water delivery", "Crop-specific setup", "Long-term efficiency"],
    },
    {
      images: [greenhouse1,greenhousewatering2],
      icon: <FaIndustry />,
      title: "Greenhouse Irrigation",
      desc: "Advanced irrigation solutions designed specifically for greenhouse environments. Optimize water usage while ensuring uniform coverage for high-value crops.",
      features: ["Automated systems", "Climate control integration", "Maximized crop yields"],
    },
  ];

  return (
    <div>
      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-green-800 drop-shadow-md">
          Our Professional Services
        </h3>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-lg md:text-xl">
          We provide a wide range of innovative and sustainable agricultural solutions tailored to maximize productivity, conserve resources, and ensure the long-term health of your farm.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              images={service.images}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-aos="fade-up"
        className="bg-green-700 text-white py-24 px-6 text-center"
      >
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Farm?
        </h3>
        <p className="mb-8 text-lg md:text-xl max-w-3xl mx-auto">
          Our team of experts is ready to provide personalized solutions tailored to your farm’s unique needs. 
          From smart irrigation systems to full greenhouse setups, we help you maximize efficiency, reduce water usage, 
          and increase crop yields. Partner with us to take your farming operations to the next level and ensure long-term sustainability.
        </p>
        <a
          href="/contact"  // linked to your contact page
          className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  );
}
