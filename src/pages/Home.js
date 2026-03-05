/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaArrowUp } from "react-icons/fa";

// Import farm images
import farm1 from "../assets/farm1.jpg";
//import farm2 from "../assets/farm2.jpg";
// eslint-disable-next-line no-unused-vars
import drippers from "../assets/drippers.jpg";
import farm7 from "../assets/farm7.jpg"; 
import smartfarm2 from "../assets/smartfarm2.jpg";
import sprinkler2 from "../assets/sprinkler2.jpg";
import tomatoirigation from "../assets/tomatoirigation.jpg"; 
//import tomatoirigation1 from "../assets/tomatoirigation1.jpg";
import gardenwatering2 from "../assets/gardenwatering2.jpg"; 
import drippp2 from "../assets/drippp2.jpg";
import drippp4 from "../assets/drippp4.jpg";
import dripinstallation from "../assets/dripinstallation.jpg";
//import dripinstallation2 from "../assets/dripinstallation2.jpg";
import sprinklerirrigation3 from "../assets/sprinklerirrigation3.jpg";
//import watersprinkler from "../assets/watersprinkler.jpg";
import dripplumbing from "../assets/dripplumbing.jpg";
import bananairrigation from "../assets/bananairrigation.jpg";
import bananairrigation2 from "../assets/bananairrigation2.jpg";
import bananairrigation3 from "../assets/bananairrigation3.jpg";
import greenhouse1 from "../assets/greenhouse1.jpg";
//import gardenwatering from "../assets/gardenwatering.jpg";
import greenhouseirrigation3 from "../assets/greenhouseirrigation3.jpg";

const slides = [
  { image: drippp4, title: "Smart Irrigation", subtitle: "Advanced irrigation systems that deliver water efficiently, reduce waste, and optimize crop growth for higher yields."  },
  { image: drippp2, title: "Sustainable Farming", subtitle:"Eco-friendly farming solutions that conserve resources, improve soil health, and promote long-term agricultural sustainability." },
  { image: farm1, title: "Smart Irrigation", subtitle: "Advanced irrigation systems that deliver water efficiently, reduce waste, and optimize crop growth for higher yields."  },
  
  { image: drippers, title: "Precision Agriculture", subtitle:"Real-time monitoring of soil, water, and crop conditions, enabling data-driven decisions for maximum productivity and reduced costs." },
  { image: greenhouse1, title: "Water Conservation", subtitle: "Smart techniques and technologies that help save up to 60% water while ensuring healthy, high-yield crops."  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">

      {/* Hero Slider */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{slide.title}</h2>
              <p className="text-lg md:text-2xl mb-6 max-w-3xl">{slide.subtitle}</p>
              <div className="flex justify-center gap-4 flex-wrap">
                
              </div>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-20">
          <FaChevronRight />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition ${idx === current ? "bg-yellow-400" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <img
              src={greenhouseirrigation3}
              alt="Welcome to Smart Farm"
              className="rounded-2xl shadow-lg w-full object-cover md:h-[350px] lg:h-[400px] animate-fadeInLeft"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4 animate-fadeInRight">
              Welcome to Smart Farm
            </h2>
            <p className="text-lg md:text-xl text-gray-700 animate-fadeInRight">
              Your journey to smarter, more efficient, and sustainable farming starts here. 
              Explore our services, learn about the latest smart farming technologies, and 
              see how we can help your farm thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <MainContent />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254726214345"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp className="text-white text-2xl"/>
      </a>

      {/* Back-to-top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 bg-yellow-400 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition z-50"
        >
          <FaArrowUp className="text-white"/>
        </button>
      )}
    </div>
  );
}

/* Main Content Sections */
function MainContent() {

  const heroImages = [bananairrigation, bananairrigation2, bananairrigation3];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Home Hero Text Section */}
      <section
        id="home"
        className="relative py-28 px-6 flex items-center justify-center text-center overflow-hidden"
      >
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Farm background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${index === currentBg ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl text-white">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Smarter Farming Starts Here
          </h2>
          <p className="text-lg md:text-xl mb-8 drop-shadow-lg">
            Transform your farm with smart irrigation and data-driven decisions.
          </p>
        </div>
      </section>

      {/* ✅ Services Section (NOW INSIDE RETURN) */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <h3 className="text-4xl font-extrabold text-center mb-6 text-green-700">
          Our Professional Services
        </h3>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          We provide modern, efficient, and sustainable irrigation solutions
          designed to increase productivity and conserve water.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                  

          <ServiceCard
            image={gardenwatering2}
            title="Garden watering"
            desc="Efficient drip systems delivering water directly to plant roots."
          /><ServiceCard
            image={sprinklerirrigation3}
            title="Sprinkler irrigation"
            desc="Efficient drip systems delivering water directly to plant roots."
          />
          <ServiceCard
            image={dripplumbing}
            title="Plumbing setup"
            desc="Efficient drip systems delivering water directly to plant roots."
          />
          <ServiceCard
            image={dripinstallation}
            title="Drip Irrigation Systems"
            desc="Efficient drip systems delivering water directly to plant roots."
          />

          <ServiceCard
            image={farm7}
            title="Smart Sensors & IoT"
            desc="Monitor soil moisture and temperature in real time."
          />

          <ServiceCard
            image={tomatoirigation}
            title="Farm Consulting"
            desc="Expert advice on sustainable farming and crop planning."
          />

        </div>
      </section>
    </>
  );
}


      {/* Services */}
  {/* Services */}
<section id="services" className="py-20 px-6 bg-gray-50">
  <h3 className="text-4xl font-extrabold text-center mb-6 text-green-700">
    Our Professional Services
  </h3>

  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
    We provide modern, efficient, and sustainable irrigation and agricultural
    solutions designed to increase productivity, conserve water, and improve
    overall farm performance. Our team ensures quality installation,
    reliability, and long-term support for every project.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

    <ServiceCard 
      image={farm1} 
      title="Drip Irrigation Systems" 
      desc="We design and install highly efficient drip irrigation systems tailored to your farm size, soil type, and crop requirements. Our systems deliver water directly to plant roots, reducing evaporation and runoff while maximizing crop yield and water efficiency. Ideal for both small-scale farms and large agricultural operations."
    />

    <ServiceCard 
      image={smartfarm2} 
      title="Smart Sensors & IoT Solutions" 
      desc="Monitor soil moisture, temperature, humidity, and crop conditions in real time using advanced smart sensors. Our IoT-based solutions provide data-driven insights that help farmers make informed decisions, reduce water waste, and improve overall farm productivity."
    />

    <ServiceCard 
      image={tomatoirigation} 
      title="Farm Consulting" 
      desc="Our expert consultants provide guidance on sustainable farming practices, crop planning, irrigation management, and productivity optimization. We work closely with farmers to develop customized strategies that increase efficiency, reduce costs, and improve long-term profitability."
    />

    <ServiceCard 
      image={gardenwatering2} 
      title="Garden Watering Solutions" 
      desc="We provide customized garden watering systems for residential, commercial, and landscape projects. Our solutions include automated timers, drip lines, and water-efficient systems that keep your gardens healthy, green, and thriving throughout the year while minimizing water usage."
    />

    <ServiceCard 
      image={sprinkler2} 
      title="Sprinkler Installation" 
      desc="Professional installation of high-performance sprinkler systems designed for uniform water distribution across lawns, gardens, and fields. Our systems can be automated and programmed for optimal scheduling, saving time and ensuring consistent plant growth."
    />

  </div>
</section>


      {/* Features, Testimonials, Contact, Footer */}
      {/* Keep the rest as is, or use farm4 for additional sections */}
    
  


/* Reusable Components */
function ServiceCard({ icon, title, desc, image }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center hover:scale-105">
      {image && <img src={image} alt={title} className="rounded-lg mb-4 w-full h-48 object-cover"/>}
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-2xl font-semibold mb-4 text-green-600">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function Feature({ title, desc }) {
  return (
    <div className="p-6 rounded-lg bg-gray-50 shadow hover:shadow-md transition hover:scale-105">
      <h4 className="text-xl font-bold mb-3 text-green-700">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function Testimonial({ name, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105">
      <p className="italic mb-4">"{text}"</p>
      <h5 className="font-bold text-green-700">— {name}</h5>
    </div>
  );
}
