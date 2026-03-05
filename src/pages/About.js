import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaUsers, FaSeedling, FaWater, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import greenhouse1 from "../assets/greenhouse1.jpg";
import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
// Team photos
import GeorgeMusa from "../assets/farm1.jpg";
import DennisMusa from "../assets/farm1.jpg";
import olemusah from "../assets/farm1.jpg";

export default function About() {
  // ⚡ Define sliderSettings inside the component
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
       {/* HERO SECTION SLIDER */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white mb-12">
        <Slider {...sliderSettings} className="h-full w-full">
          {[greenhouse1, farm1, farm2].map((img, index) => (
            <div key={index} className="relative h-[60vh]">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-900/70 flex items-center justify-center px-6">
                <div className="relative z-10 max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                    Transforming Agriculture with Smart Technology
                  </h1>
                  <p className="text-lg md:text-xl text-green-100">
                    Empowering farmers with efficient irrigation and sustainable solutions.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto py-20 px-6">

        {/* WHO WE ARE */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-700">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Smart Farm is an agritech solutions provider helping farmers adopt
              modern irrigation systems, smart sensors, and data-driven
              agricultural strategies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We design efficient, sustainable systems that reduce water usage,
              improve crop health, and increase farm profitability.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-green-100">
            <h3 className="text-2xl font-semibold mb-6 text-green-700">
              What Sets Us Apart
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✅ Customized farm solutions</li>
              <li>✅ Water-saving irrigation systems</li>
              <li>✅ Smart monitoring & analytics</li>
              <li>✅ Experienced agricultural consultants</li>
              <li>✅ Reliable after-sales support</li>
            </ul>
          </div>
        </motion.div>

        {/* MISSION & VISION */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-green-50 p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h3>
            <p className="text-gray-600">
              To transform agriculture in Kenya and beyond by making smart,
              affordable, and sustainable farming solutions accessible to every farmer.
            </p>
          </div>

          <div className="bg-green-50 p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of smart farm solutions that drive
              sustainable growth, resource efficiency, and higher farmer income.
            </p>
          </div>
        </motion.div>

        {/* IMPACT STATS */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedStat number={500} label="Farmers Empowered" Icon={FaUsers} />
            <AnimatedStat number={200} label="Acres Improved" Icon={FaSeedling} />
            <AnimatedStat number={10} label="Million Liters Saved" Icon={FaWater} />
            <AnimatedStat number={30} label="Yield Increase (%)" Icon={FaChartLine} />
          </div>
        </motion.div>

        {/* TEAM */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
            Meet Our Experts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <TeamCard name="George Musa" role="Agricultural Consultant" photo={GeorgeMusa} phone="+254726214345" />
            <TeamCard name="Dennis Musa" role="Smart Farm Technology Specialist" photo={DennisMusa} phone="+254793878019" />
            <TeamCard name="Olemusah" role="Drip Irrigation Expert" photo={olemusah} phone="+254701234567" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="bg-green-700 text-white rounded-3xl p-14 text-center shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Upgrade Your Farm?
          </h2>
          <p className="mb-8 text-green-100 text-lg">
            Contact us today for expert consultation and smart farming solutions.
          </p>
          <Link 
    to="/contact" 
    className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-100 transition inline-block"
  >
    Get in Touch
  </Link>
        </motion.div>

      </div>
    </div>
  );
}

/* Animated Stat Component */
function AnimatedStat({ number, label, Icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        start = number;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [number]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
      <Icon className="text-4xl text-green-600 mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-green-700">{count}+</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

/* Team Card */
function TeamCard({ name, role, photo, phone }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-3 duration-300">
      <img
        src={photo}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="font-semibold text-lg mb-1">{name}</h4>
      <p className="text-gray-500 text-sm">{role}</p>
      <p className="text-green-700 font-medium mt-2">{phone}</p>
    </div>
  );
}
