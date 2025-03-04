import { motion } from "framer-motion";
import Blog1 from '../assets/Blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';

const Blog = () => {
    return ( 
        <div className="relative w-full  pt-8 bg-gradient-to-bl  from-[#706FAB] to-[#8887c4] min-h-screen">

<motion.div
  initial={{ rotateY: 90, opacity: 0 }}
  animate={{ rotateY: 2, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }} // Slightly longer duration
  className="bg-transparent text-white text-center"
>

      {/* Page Content */}
      <div className="relative z-10 flex font-kanit flex-col items-center justify-center mt-36 mb-16 text-white text-center px-16">
      <img 
          src={Arrow1}
          alt="Curved underline" 
          className="absolute right-1/2 md:right-[480px] -top-14 -translate-x-12 w-[80px] md:w-[90px]" 
        />
    <h1 className="text-4xl md:text-6xl z-20 lg:text-7xl font-kanit mb-8 px-8  leading-tight">
  BLOG 
    </h1>
    <img 
          src={Orange}
          alt="Curved underline" 
          className="absolute left-1/2 md:left-[480px] bottom-24 -translate-x-1/2 w-[180px] md:w-[280px]" 
        />
    <p className="mt-6 sm:px-11 px-2 text-sm font-montserrat sm:text-base  md:text-sm lg:text-sm max-w-4xl">
    Rev.Chris Oyakhilome
  
    </p>
    <p className='  hover:text-green-500 font-montserrat md:text-sm lg:text-sm cursor-pointer '>  DSc, DSc, DD</p>
  </div>
  </motion.div>



  <div className="flex flex-col items-center font-montserrat bg-white w-full  text-center py-8 px-36">
  {/* Heading */}
  <h2 className="text-3xl mb-4 mt-10 font-bold text-gray-900 w-full">
    The Future Africa Leaders Foundation held its<br/> cocktail <br />
    reception on January 3, 2023
  </h2>

  {/* Image Section */}
  <div className="mt-4 flex flex-col items-center w-full">
    <img src={Blog1} alt="FALF Cocktail Event" className="w-full max-w-screen tansition-transform duration-300 hover:scale-105 rounded-lg shadow-md" />
    <p className=" text-black font-semibold mt-4 px-8 w-full capitalize">
      Present and past winners of the Future Africa Leaders Awards who made significant
      contributions to their communities and countries were in attendance.
    </p>

    {/* Button */}
    <button className="mt-4 bg-[#706FAB] text-white px-6 py-2 rounded-lg  font-semibold hover:bg-purple-700 transition">
      Continue Reading
    </button>
  </div>

  {/* Second Section */}
  <h2 className="text-3xl mb-4 mt-20 font-semibold text-gray-900 w-full py-8 px-36">
    SCALE UP WITH FUTURE AFRICA LEADERS <br /> FOUNDATION
  </h2>

  <div className="mt-4 flex flex-col items-center w-full">
    <img src={blog2} alt="FALF Cocktail Event" className="w-full max-w-screen tansition-transform duration-300 hover:scale-105 rounded-lg shadow-md" />
    <p className="\ text-black mt-4 px-6 w-full font-semibold capitalize">
      The Future Africa Leaders Foundation is empowering its ambassadors and leaders of its network 
      for greater impact in African communities, through capacity-building with the FALF Leadership Institute.
    </p>

    {/* Button */}
    <button className="mt-4 bg-[#706FAB] text-white px-6 py-2 rounded-lg  font-semibold hover:bg-purple-700 transition">
      Continue Reading
    </button>
  </div>

  {/* Third Section */}
  <h2 className="text-3xl mb-4 mt-20 font-semibold text-gray-900  py-8 px-36 w-full">
    FALA 2023 COCKTAIL AND FALF INAUGURAL <br />
    CEREMONY
  </h2>

  <div className="mt-4 flex flex-col items-center w-full">
    <img src={blog3} alt="FALF Cocktail Event" className="w-full max-w-screen tansition-transform duration-300 hover:scale-105 rounded-lg shadow-md" />
    <p className=" text-black mt-4 px-6 w-full font-semibold capitalize">
      These remarkable future African leaders delivered inspiring speeches, filled with joy as they 
      celebrated their achievements and awards.
    </p>

    {/* Button */}
    <button className="mt-4 mb-20 bg-[#706FAB] text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
      Continue Reading
    </button>
  </div>
</div>








  </div>
  )
  };
  
  export default Blog;