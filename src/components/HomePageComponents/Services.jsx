import React, {useState} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import services_img_1 from '../../assets/img/services_img_1.png'
import services_img_2 from '../../assets/img/services_img_2.png'
import services_img_3 from '../../assets/img/services_img_3.png'
import services_img_4 from '../../assets/img/services_img_4.png'
// import services_img_4 from '../../assets/img/services_img_1.png'



const Services = () => {
    const [expandedId, setExpandedId] = useState(null)

    const servicesData = [
      {
        id: 1,
        title: "Solar Inverter Installation",
        description:
          "We install solar systems designed to match your power needs. Whether it's a small apartment or a growing business, we help you build a system that works — efficiently and affordably.",
        image: services_img_1,
      },
      {
        id: 2,
        title: "Energy Consultation",
        description:
          "Not sure what you need? We analyze your energy usage and recommend a system that gives you value without overkill. No guesswork, just smart planning.",
        image: services_img_2,
      },
      {
        id: 3,
        title: "Education & Awareness",
        description:
          "We simplify solar. Through our content and personalized walkthroughs, we help you understand how your system works and how to get the best from it.",
        image: services_img_3,
      },
      {
        id: 4,
        title: "Maintenance & Support",
        description:
          "Already have a solar setup? We offer routine checks, inverter repairs, battery upgrades, and ongoing technical support.",
        image: services_img_4,
      },
    ]
  
    const handleToggle = (id) => {
      setExpandedId(expandedId === id ? null : id) // toggle open/close
    }
  
    return (
      <div id="services" className="py-20 px-5 sm:px-6 lg:px-40 bg-white text-[#011627]">
        <div className="mb-10">
          <span className="text-sm">WHAT WE DO</span>
          <h2 className="text-[#F5622A] text-3xl md:text-4xl font-bold">OUR SERVICES</h2>
        </div>
  
        <div className="carousel carousel-center rounded-t-4xl">
          {servicesData.map((service) => (
            <div key={service.id} className="carousel-item relative">
              <img src={service.image} alt="services_image" className="w-98 2xl:w-[500px]" />
  
              <div className="absolute bottom-8 left-0 right-0 mx-8 p-3 text-white bg-white/10 backdrop-blur-sm rounded-md transition-all ">
                <p className="w-full text-base font-semibold">{service.title}</p>
  
                <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedId === service.id ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm">{service.description}</p>
              </div>

              <button
                onClick={() => handleToggle(service.id)}
                className={`text-sm underline cursor-pointer ${expandedId === service.id ? 'mt-3' : 'mt-1'} block transition-all duration-500 ease-in-out`}
              >
                {expandedId === service.id ? "Show Less" : "Read More"}
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Services