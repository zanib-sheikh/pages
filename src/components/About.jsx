import React from 'react';
import { motion } from "framer-motion";
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
import Kid2 from '../assets/Kid2.png';
import { Globe, Eye, Clock, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";


function About() {
  return (
    
<div className="relative w-full  pt-16 bg-gradient-to-bl  from-[#706FAB] to-[#8887c4] min-h-screen">
       

      {/* Page Content */}
      <div className="flex flex-col md:flex-row items-center mt-4 mb-20  gap-8 md:gap-16  px-6 md:px-24 ">
  
  {/* Text Section (Appears first on all screen sizes) */}
  <div className="w-full md:w-1/2  text-left order-1 md:order-none">
  <img 
          src={Arrow1}
          alt="Curved underline" 
          className="absolute left-1/2 md:left-[480px] top-64 -translate-x-1/2 w-[80px] md:w-[90px]" 
        />
         <img 
          src={Orange}
          alt="Curved underline" 
          className="absolute left-1/2 md:left-[400px] top-340 -translate-x-1/2 w-[180px] md:w-[280px]" 
        />
    <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-11">
    
      <span className="border-b-4 text-white border-green-500">About Us</span>
    </h2>
    <p className="text-white font-montserrat leading-relaxed text-lg pr-12 md:text-base capitalize">
    The Future Africa Leaders Foundation is an initiative aimed at exploring and expanding the leadership potentials in Africa and for Africa. It is for identifying, celebrating and supporting young Africans who have demonstrated exemplary leadership by impacting their generation positively through education, youth empowerment and mentoring through other projects aimed at building young people and preparing them for a positive future.</p>
  </div>

  {/* Image Section (Appears after text on mobile) */}
  <div className="relative flex items-center justify-center w-full mt-20 px-10 transition-transform duration-300 hover:scale-105 md:w-1/2 order-2 md:order-none"> 
  {/* Centered Image */}
  <img src={Kid2} alt="Smiling child" className="w-[450px] h-auto rounded-xl" />

  {/* Fixed Centered Round Button */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="bg-gray-200 p-2 md:p-3 rounded-full">
      <svg className="w-8 h-8 md:w-10 md:h-10 text-[#BC99C3]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"></path>
      </svg>
    </div>
  </div>
</div>

</div>


<div className="flex flex-col md:flex-row justify-center font-montserrat bg-white items-center gap-16 px-36 pt-16">
      {/* Mission Card */}
      <div className="bg-[#706FAB] text-white  shadow-lg px-6 py-9 text-center relative h-full  w-full">
        <div className="absolute -top-6 left-12 transform -translate-x-1/2 bg-[#BC99C3] w-12 h-12 rounded-full flex items-center justify-center">
          <Globe size={24} color="white" />
        </div>
        <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
        <p className="text-sm mt-3">
          To identify, explore, celebrate, train and support African youths who have demonstrated exemplary leadership qualities in various fields of endeavors.
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-[#706FAB] text-white  shadow-lg px-6 py-9 text-center relative w-full">
        <div className="absolute -top-6 left-12 transform -translate-x-1/2 bg-[#BC99C3] w-12 h-12 rounded-full flex items-center justify-center">
          <Eye size={24} color="white" />
        </div>
        <h2 className="text-xl font-semibold mt-6">Our Vision</h2>
        <p className="text-sm mt-3">
          To raise financial, political, technological, intellectual, and economic giants who are driven by the challenges in Africa to proffer sustainable solutions.
        </p>
      </div>

      {/* Goal Card */}
      <div className="bg-[#706FAB] text-white  shadow-lg px-6 py-9  text-center relative w-full">
        <div className="absolute -top-6 left-12 transform -translate-x-1/2 bg-[#BC99C3] w-12 h-12 rounded-full flex items-center justify-center">
          <Clock size={24} color="white" />
        </div>
        <h2 className="text-xl font-semibold mt-6">Our Goal</h2>
        <p className="text-sm mt-3">
          To impact African youths all around the world through our mentorship programs that enable the youths to tackle prevalent challenges in Africa.
        </p>
      </div>
    </div>





    <div className="flex flex-col md:flex-row items-center justify-center font-montserrat bg-white py-3 px-8 md:p-12 ">
      {/* Google Map */}
      <div className="w-full md:w-1/2 h-96">
        <iframe
          className="w-full h-full  shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.33351689918!2d3.322497!3d6.601839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93cb2330f8e9%3A0x9d11ec275b6fa2a!2sIkeja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1708430000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info Section */}
      <div className="w-full md:w-1/2 bg-[#B69FD5] text-white p-6 md:p-10  h-96 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">CONTACT INFORMATION</h2>
        <p className="text-sm mb-4">
          You can contact us any way that is convenient for you. We are available 24/7 via email.
        </p>

        <div className="space-y-4 mt-10 mb-11">
          {/* Address */}
          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <p className='text-xs'>21/23 Ize Iyamu Street, Off Billings Way, Oregun, Ikeja, Nigeria</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone size={20} />
            <p className='text-xs'>+ (234) 703 936 3940</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail size={20} />
            <p className='text-xs'>contact@futureafricaleadersfoundation.org</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6">
          <Globe size={24} className="cursor-pointer hover:text-gray-300" />
          <Facebook size={24} className="cursor-pointer hover:text-gray-300" />
          <Instagram size={24} className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </div>



      




</div>
  )
  };
  
  export default About;
  