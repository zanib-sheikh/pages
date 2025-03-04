import React from 'react';
import { useState, useEffect } from "react";
import M3 from '../assets/M3.png';
import M4 from '../assets/M4.png';
import line from '../assets/line.png';
import { motion } from "framer-motion";
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
import share from '../assets/share.png';
import Looper from '../assets/Looper-3.png';
import Kid from '../assets/Kid.png';
import Kid2 from '../assets/Kid2.png';
import Amplitude from '../assets/Amplitude.png';
import Hellosign from '../assets/Hellosign.png';
import ghost from '../assets/ghost.png';
import Razorpay from '../assets/Razorpay.png';
import Kid3 from '../assets/Kid3.png';
import curve from '../assets/curve.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Scholarship from '../assets/scholarship.png';
import image from '../assets/image.png';
import Girl from '../assets/Girl.png';
import Union from '../assets/Union.png';
import Girl2 from '../assets/Girl2.png';
import Image1 from '../assets/Image1.png';
import image3 from '../assets/image3.png';
import Image4 from '../assets/Image4.png';
import { LayoutDashboardIcon, LayoutGrid, StarIcon, StarsIcon, Play} from 'lucide-react';


const backgrounds = ["gradient", "image1", "image2", "red", "orange"];
function Home() {

  const testimonials = [
    {
      image: Kid2,
      name: "Scott Adams",
      comment:
        "Whoa Whoa, Let Me Take Some Notes! A Wealth Of Audio Knowledge. Every Episode Is A Gem! I’ve Upped My Game Considerably Since I Started Listening. Really A Wonderful Platform For Podcasts.",
    },
    {
      image: M4,
      name: "Emily Johnson",
      comment:
        "This Platform Has Completely Transformed How I Learn! The Content Is Engaging, Insightful, And Packed With Value. I Highly Recommend It To Anyone Looking For Quality Resources.",
    },
    {
      image: M3,
      name: "Michael Lee",
      comment:
        "I Never Thought Learning Could Be This Fun! The Interactive Elements And Storytelling Approach Make Every Session Memorable. A Must-Try For Lifelong Learners!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup function
  }, [testimonials.length]);


  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle swipe
  const handleSwipe = (index) => {
    setCurrentIndex(index);
  };

  const [bgType, setBgType] = useState("gradient");

  useEffect(() => {
    const interval = setInterval(() => {
      setBgType((prev) => {
        const currentIndex = backgrounds.indexOf(prev);
        return backgrounds[(currentIndex + 1) % backgrounds.length]; // Move to the next background
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  const getBackgroundStyle = () => {
    switch (bgType) {
      case "image1":
        return  {backgroundColor: "#706FAB"};
      case "image2":
        return {backgroundColor: "#8887c4"};
      case "red":
        return { backgroundColor: "#BC99C3" };
      case "orange":
        return { backgroundColor: "#6c6bb1" };
      default:
        return {};
    }
  };

  return (
    <div
    className={`relative w-full min-h-screen transition-all duration-500 overflow-hidden ${
      bgType === "gradient" ? "bg-gradient-to-bl from-[#706FAB] to-[#8887c4]" : ""
    }`}
    style={{ ...getBackgroundStyle(), overflowX: "hidden" }} // Extra safeguard
  >
  {/* Page Content */}
    {/* Page Content */}
    <div className="relative z-10 flex flex-col items-center justify-start h-full text-white text-center px-6 pt-12">
        <motion.div
          initial={{ rotateY: 80, opacity: 0 }}
          whileInView={{ rotateY: 2, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-transparent relative text-white text-center"
        >
          {/* Heading */}
          <h1 className="text-4xl z-50 md:text-8xl mt-32 lg:text-8xl font-kanit  leading-tight">
          <img 
          src={Arrow1}
          alt="Curved underline" 
          className="absolute right-1/2 md:right-[100px] bottom-[240px] -translate-x-12 w-[80px] md:w-[90px]" 
        />
            THE FUTURE AFRICA <br className="hidden sm:block" /> LEADERS FOUNDATION
          </h1>  <img 
          src={Orange}
          alt="Curved underline" 
          className="absolute -z-10 right-[-150px] bottom-[360px] -translate-x-1/2 w-[180px] md:w-[370px]" 
        />


          {/* Description */}
          <p className="mt-4 sm:px-11 px-2 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl capitalize">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor praesent
            non amet, posuere vitae sed quam semper.
          </p>

          {/* Read More Link */}
          <p className="mt-2 hover:text-green-500 mb-32 cursor-pointer underline text-[#EA6B12]">
            Read More....
          </p>
        </motion.div>

        
       {/* Buttons to Change Background */}
       <div className="absolute bottom-80 z-40 flex space-x-3">
        {backgrounds.map((type) => (
          <button
            key={type}
            onClick={() => setBgType(type)}
            className={`w-2 h-2 rounded-full border-2 ${
              bgType === type ? "bg-white" : "border-white"
            }`}
          ></button>
        ))}
      </div>


<div className="bg-transparent w-screen overflow-x-auto  flex items-center  pl-10 md:pl-20 lg:pl-32">
  <Swiper
    slidesPerView={1.2} 
    breakpoints={{
      640: { slidesPerView: 1.5, spaceBetween: 20 }, // Small screens
      768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
      1024: { slidesPerView: 2.8, spaceBetween: -30 }, // Desktop - Maintain old layout
    }}
    grabCursor={true} // 🔹 Enables drag/swipe on desktop
    mousewheel={{ forceToAxis: true }} // 🔹 Enables scrolling with mouse wheel
    navigation={true} // 🔹 Adds left/right arrows (optional)
    className="w-[85%] md:w-[100%]"
  >
    

    {[1, 2, 3].map((index) => (
      <SwiperSlide key={index}>
        <div className="bg-[#57468B] text-white mt-0 mb-14 w-[603.6351318359375] h-[237.9032440185547] rounded-3xl flex items-center shadow-2xl shadow-black">
          
      
          <div className="rounded-xl w-1/2 flex tansition-transform duration-300 hover:scale-105 justify-center">
            <img src={Scholarship} alt="Sponsorship" className="w-[800px] h-[237.9032440185547px] rounded-lg" />
          </div>

     
          <div className="w-1/2 flex flex-col justify-center pl-0">
            <h2 className="text-lg font-sans  text-left">Sponsorship <br /> Opportunities</h2>
            <button className="bg-orange-500 w-[160px] tansition-transform duration-300 hover:scale-105 hover:bg-orange-600 text-white px-4 py-2 mt-3 rounded-lg shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


      </div> 
    





  






<motion.div
  initial={{ x: -400, rotate: 0, opacity: 0 }}
  whileInView={{ x: 0, rotate: 0, opacity: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="bg-transparent text-white text-center"
>

    <div className="bg-[#3E034D] w-full h-[90px] flex  items-center justify-center">
<div className='flex items-center font-kanit text-2xl text-white font-bold gap-6 lg:gap-16'>
    <h1 className='flex'><img  src={Amplitude}  className=" w-8 h-6 mt-2 pr-2"  />Amplitude</h1>
    <h1 className='flex'><img  src={Hellosign}  className=" w-4 h-4 mt-2 "  />HELLOSIGN</h1>
    <h1 className='flex'><img  src={Razorpay}  className=" w-2 h-4 mt-2"  /><img  src={Razorpay}  className=" w-3 h-4 mt-2 "  />Razorpay</h1>
    <h1 className='flex'> <LayoutGrid className=" w-8 h-6 mt-2 "/>   ghost</h1>
</div>
</div></motion.div>



<div className="flex flex-col items-center py-4 min-h-screen w-screen bg-white justify-center">

  <div className="bg-white px-6 md:px-16 lg:px-24 py-4 text-black text-center mt-10 md:mt-16 mb-6 md:mb-11">
  <h1 className="relative text-3xl md:text-4xl font-roboto font-bold mb-4 md:mb-6 inline-block">
  <span className="relative z-10 pr-0">Impact </span>  
  <span className="relative z-10 ml-1">
    Report
    <img 
      src={line} 
      alt="underline" 
      className="absolute h-2 left-1 bottom-1 w-full -z-10"
    />
  </span>
</h1>



    <p className="px-4 md:px-16 lg:px-24 font-roboto text-lg md:text-base">
    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Tortor Praesent Non Amet, Posuere <br/> Vitae Sed Quam Semper
    </p>
  </div>


  

  <div className="px-16 py-2 w-full text-black text-center animate-fade-in lg:mb-32 mb-24 flex justify-center gap-16">
  
  {/* Card 1 */}
  <div className="bg-white w-full h-full animate-fade-in rounded-2xl shadow-xl transition-transform duration-300 hover:scale-110 shadow-gray-500 overflow-hidden">
    <img src={image} alt="Card Image" className="w-full h-full object-cover" />
    
    <div className="bg-[#706FAB] text-white text-left lext-lg px-5 py-8 font-montserrat ">
      <p>Eco Friendly Bags and Baskets. A Step Towards a Sustainable Living  in Malawi</p>
    </div>
    <div className="bg-[#BC99C3] py-3 text-white font-bold  cursor-pointer hover:bg-[#A290C5]">
      VIEW MORE
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white w-full h-full rounded-2xl transition-transform duration-300 hover:scale-105 shadow-xl shadow-gray-500 overflow-hidden">
    <img src={image} alt="Card Image" className="w-full h-full object-cover" />
    
    <div className="bg-[#706FAB] text-white px-6 py-8 text-left font-montserrat  ">
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-[#BC99C3] py-3 text-white font-bold cursor-pointer hover:bg-[#A290C5]">
      VIEW MORE
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white w-full h-full rounded-2xl transition-transform duration-300 hover:scale-105  shadow-xl shadow-gray-500 overflow-hidden">
    <img src={image} alt="Card Image" className="w-full h-full object-cover" />
    
    <div className="bg-[#706FAB] text-white text-left px-6 py-8 font-montserrat ">
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-[#BC99C3] py-3 text-white font-bold cursor-pointer hover:bg-[#A290C5]">
      VIEW MORE
    </div>
  </div>

</div> 




<motion.div
  initial={{ x: -250, rotate: 0, opacity: 0 }}
  whileInView={{ x: 0, rotate: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="bg-transparent text-white text-center w-screen"
>
  <div className="w-full text-black mt-2 flex flex-col items-center justify-center">
  <h1 className="text-center font-kanit px-4 mb-8 md:mb-16 text-3xl md:text-4xl font-semibold relative inline-block">
  FUTURE AFRICA LEADERS  
  <span className="relative pl-2 pr-2  z-10">
    FOUNDATION
    <img 
      src={line} 
      alt="underline" 
      className="absolute h-3 right-1 bottom-3 w-[180px] -z-10"
    />
  </span> 
  STAR WINNERS
</h1>


    {/* Grid Layout for Responsive Columns */}
    <div className="flex flex-col md:flex-row gap-4 px-16 w-full max-w-full">
      
      {/* Left Column (Larger Image) */}
      <div className="relative transition-transform duration-300 hover:scale-105 w-full md:w-1/3 h-[320px] md:h-[495px]">
        <img src={Girl} alt="Sarah Eve" className="w-full h-full object-cover " />
  
  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white flex justify-between items-center">
  <div>
    <h2 className="font-bold text-lg text-left">Sarah Eve</h2>
    <p>How To Kickstart Your Freelancing Career?</p>
  </div>
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button></div>

      </div>

      {/* Right Column (2 Rows of Smaller Images) */}
      <div className="flex flex-col gap-4 w-full md:w-2/3">
        
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="transition-transform duration-300 hover:scale-105 relative w-full md:w-3/4 h-[240px]">
            <img src={Girl2} alt="Marry" className="w-full h-full object-cover " />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white flex justify-between items-center">
  <div>
    <h2 className="font-bold text-lg text-left">Marry</h2>
    <p>How To Kickstart Your Freelancing Career?</p>
  </div>
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button></div>
          </div>

          <div className="relative w-full md:w-1/2 h-[240px] transition-transform  duration-300 hover:scale-105">
            <img src={image3} alt="Eva Floris" className="w-full h-full object-cover " />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm px-4 py-4 text-white flex justify-between items-center">
  {/* Left Side - Text */}
  <div className="flex flex-col items-start">
    <h2 className="font-bold text-lg text-left">Eva Floris</h2>
    <p className="text-left">How To Kickstart Your Freelancing Career?</p>
  </div>

  {/* Right Side - Button */}
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button>
</div>

          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-1/2 h-[240px] transition-transform duration-300 hover:scale-105">
            <img src={Image4} alt="Anna Sornio" className="w-full h-full object-cover " />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white flex justify-between items-center">
            <div className='justufy-start items-start'>
    <h2 className="font-bold text-lg text-left">Anna Sornio</h2>
    <p className='text-left'>How To Kickstart Your Freelancing Career?</p>
  </div>
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button>

  </div>
          </div>

          <div className="relative w-full md:w-3/4 h-[240px] transition-transform duration-300 hover:scale-105">
            <img src={Image1} alt="Alex James" className="w-full h-full object-cover " />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white flex justify-between items-center">
  <div>
    <h2 className="font-bold text-lg text-left">Alex James</h2>
    <p>How To Kickstart Your Freelancing Career?</p>
  </div>
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button></div>
          </div>
        </div>

      </div>

    </div>
  </div>
</motion.div>

  {/* Page Content */}
  <div className="flex flex-col md:flex-row items-center mt-28 mb-20  gap-8 md:gap-16  px-6 md:px-24 ">
  
  {/* Text Section (Appears first on all screen sizes) */}
  <div className="w-full md:w-1/2 text-left order-1 md:order-none">
  <h2 className="text-4xl md:text-4xl font-bold mb-6 md:mb-11 relative inline-block">
  <span className="relative z-10">
    About
    <img 
      src={line} 
      alt="underline" 
      className="absolute left-4 bottom-1 h-3 w-full -z-10"
    />
  </span>
</h2>

    <p className="text-black font-montserrat leading-relaxed text-lg pr-12 md:text-base capitalize">
    The Future Africa Leaders Foundation is an
initiative aimed at exploring and expanding the
leadership potentials in Africa and for Africa. It is
for identifying, celebrating and supporting young
Africans who have demonstrated exemplary
leadership by impacting their generation positively. <br/>
through education, youth empowerment and
mentoring through other projects aimed at
building young people and preparing them for a
positive future.</p> </div>

  {/* Image Section (Appears after text on mobile) */}
  <div className="relative flex items-center justify-center w-full px-10 transition-transform duration-300 hover:scale-105 md:w-1/2 order-2 md:order-none"> 
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

<motion.div
  initial={{ scale: 0.5, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="bg-transparent text-white text-center px-44 w-full"
>
  <div className="flex flex-col md:flex-row transition-transform duration-300 hover:scale-105 justify-between opacity-0 animate-fade-in items-center bg-[#BC99C3] text-white h-auto md:h-[280px] rounded-2xl p-6 w-full px-8 my-12 mt-24 relative">
    
    {/* Left Section (Text) */}
    <div className="w-full md:w-2/3 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-kanit px-4 md:px-10 mb-4 md:mb-8 font-semibold relative">
        <span className="relative pb-4 text-white inline-block">
          Share this page
          <img 
            src={curve}
            alt="Curved underline" 
            className="absolute left-1/2 md:left-[250px] -bottom-4 -translate-x-1/2 w-[60px] md:w-[80px]" 
          />
        </span>
      </h2>
      <p className="text-sm font-montserrat px-4 mb-11 md:px-10 mt-2 capitalize">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden md:block"/> Tortor praesent non amet.
      </p>
    </div>

    {/* Right Section (Button) */}
    <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0 pr-0 md:pr-36">
      <button className="bg-[#E3770A] text-white px-14 md:px-20 py-3 md:py-4 rounded-lg shadow-md hover:bg-orange-600 transition">
        Share
      </button>
    </div>

    {/* Background Graphics */}
    <div className="absolute top-0 left-0 z-10 w-full pointer-events-none">
  {/* Image on the Top-Left */}
  <img 
    src={share} 
    alt="Background design" 
    className="absolute top-0 left-0 w-[160px] h-auto"
  />

  {/* Loop on the Top-Right */}
  <img 
    src={Looper} 
    alt="Loop Design" 
    className="absolute top-[2.65px] right-0 opacity-[50px] w-[260.57px] h-[220.71px]"
  />
</div>



  </div>
</motion.div>







<div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto my-12 p-6 md:p-8">
      {/* Left Section (Text) */}
      <div className="w-full md:w-1/2 md:text-left px-16 text-center order-1 md:order-none">
        <img src={Union} alt="Student Testimonial" className="w-8 mb-4 md:mb-5 h-auto rounded-lg" />
        <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
  <span className="text-black">What Our People</span> <br />
  <span className="relative z-10 inline-block">
    Saying
    <img 
      src={line} 
      alt="underline" 
      className="absolute left-0 bottom-0 w-full -z-10"
    />
  </span>
  <span className="text-black"> About Us</span>
</h2>

        <p className="text-gray-600 font-roboto mt-6 md:mt-8 w-full text-sm md:text-base">
          {testimonials[currentIndex].comment}
        </p>
        <p className="mt-4 md:mt-6 font-roboto font-bold text-black">
          {testimonials[currentIndex].name}
        </p>

        {/* Star Rating */}
        <div className="flex text-blue-500 transition-transform duration-300 hover:scale-105 animate-bounce md:text-left md:item-start md:justify-start item-center justify-center mt-2">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>

        {/* Swipe Dots */}
        <div className="flex justify-center md:justify-end mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSwipe(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-blue-600 scale-110" : "bg-white border-2 border-blue-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Section (Image with Overlapping Square) */}
      <div className="relative px-28 w-full md:w-1/2 flex justify-end text-center transition-transform duration-300 hover:scale-105 order-2 md:order-none mt-8 md:mt-0">
        <img
          src={testimonials[currentIndex].image}
          alt="Student Testimonial"
          className="w-[370px] h-auto relative z-10"
        />

        <div className="absolute inset-0 flex pr-[230px] items-center justify-center pointer-events-none">
          <div className="border-[10px] md:border-[20px] border-[#1E1E20] w-[200px] md:w-[296px] h-[220px] md:h-[270px] absolute z-20"></div>
        </div>
      </div>
    </div>






<motion.div
      className="bg-transparent text-white p-2 text-center"
      initial={{ opacity: 0, y: 50 }} // Start state (hidden & moved down)
      whileInView={{ opacity: 1, y: 0 }} // Animate when visible
      transition={{ duration: 0.9 }} // Smooth transition
    >

<div className="bg-[#BC99C3] font-roboto relative p-6 md:p-12 lg:p-16 h-auto w-full max-w-5xl mt-4 mb-6 mx-auto">
  {/* Heading and Paragraph */}
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left lg:mb-20 mb-6">
    <h2 className="text-2xl pl-0 mt-2 lg:pl-16 md:text-3xl font-semibold text-white md:w-1/2">
      Subscribe and get <br className="hidden md:block" /> updates regularly
    </h2>
    <p className="text-white mt-5 md:mt-0 text-md md:w-1/2 lg:pr-8  pl-0">
      Rebuilt for simplicity and speed, so you can spend more time discovering and listening to great podcasts. Get all the updates of the latest podcasts.
    </p>
  </div>

  {/* Input Fields and Button */}
  <div className="relative pointer-events-auto flex flex-col md:flex-row lg:mt-34 mt-2 items-center md:items-center lg:gap-16 gap-4 md:gap-6 px-6">
    <input
      type="text"
      placeholder="Your name"
      className="p-3 rounded-md w-full md:w-1/3 border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
    />
    <input
      type="email"
      placeholder="Your email address"
      className="p-3 rounded-md w-full md:w-1/3 border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
    />
    <button className="bg-[#706FAB] text-white px-6 py-2 animate-pulse rounded-lg w-full md:w-auto hover:bg-purple-500 focus:ring-2 focus:ring-purple-300">
      Submit
    </button>
  </div>
</div>
</motion.div>











</div>





    </div>
  );
}

export default Home;
