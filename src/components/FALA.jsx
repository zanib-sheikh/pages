import { motion } from "framer-motion";
import Union from '../assets/Union.png';
import Fala1 from '../assets/Fala1.png';
import Fala2 from '../assets/Fala2.png';
import line from '../assets/line.png';
import Fala3 from '../assets/Fala3.png';
import { Check } from "lucide-react";
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
function FALA() {
    return ( 
        <div className="relative w-full  pt-12 bg-gradient-to-bl  from-[#706FAB] to-[#8887c4] min-h-screen">

<motion.div
  initial={{ rotateY: 90, opacity: 0 }}
  whileInView={{ rotateY: 2, opacity: 1 }}
  transition={{ duration: 0.9 }}
  className="bg-transparent text-white text-center"
>
      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-36 mb-36 text-white text-center px-6">
      <img 
          src={Arrow1}
          alt="Curved underline" 
          className="absolute right-1/2 md:right-[180px] -top-14 -translate-x-12 w-[80px] md:w-[90px]" 
        />
    <h1 className="text-4xl z-10 md:text-6xl lg:text-6xl font-kanit mb-8  leading-tight">
    NO ONE WILL BUILT AFRICA <br/> FOR US. AFRICA WILL BUILT <br/> BY AFRICANS.
    </h1>
    <img 
          src={Orange}
          alt="Curved underline" 
          className="absolute left-1/2 md:left-[440px] bottom-[210px] -translate-x-1/2 w-[180px] md:w-[370px]" 
        />
    <p className="mt-6 sm:px-11 px-2 text-sm font-montserrat sm:text-base  md:text-sm lg:text-sm max-w-4xl">
    Rev.Chris Oyakhilome
  
    </p>
    <p className='  hover:text-green-500 font-montserrat md:text-sm lg:text-sm cursor-pointer '>  DSc, DSc, DD</p>
  </div>
  </motion.div>




  <div className="bg-white items-center font-montserrat justify-between w-full mt-2 mb-16 mx-auto p-1 capitalize">
      {/* Eligibility Section */}
      <div className="flex mt-20 ">
      <div className="w-full md:w-1/2 md:text-left md:pl-28 text-center justify-center mt-14 order-1 md:order-none">
    <img 
      src={Union}
      alt="Student Testimonial" 
      className="w-8 mb-4 md:mb-5  h-auto rounded-lg"
    />
    <h2 className="text-2xl md:text-3xl mb-9 font-bold relative">
  <span className="text-black">Eligibility </span>  
  <span className="relative z-10 inline-block">
    Status
    <img 
      src={line} 
      alt="underline" 
      className="absolute left-1 bottom-0 w-full -z-10"
    />
  </span> 
</h2>

    <ul className="mt-9  space-y-3">
          <li className="flex items-center gap-2">
            <Check className="text-gray-800" /> Be A Citizen Of An African Country
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-gray-800" /> Be Between The Ages Of 16 To 25
          </li>
        </ul>
  </div>
  <div className="relative w-full md:w-1/2 flex items-center justify-center transition-transform duration-300 hover:scale-95 order-2 md:order-none mt-8 md:mt-8">
  {/* Image */}
  <img 
    src={Fala1}
    alt="Student Testimonial" 
    className="w-64 md:w-[300px] h-auto relative"
  />

  {/* Overlapping Square (Fixed & 70% Left) */}
  <div className="absolute top-1/2 right-[40%] -translate-x-1/2 -translate-y-1/2 border-[10px] md:border-[12px] border-black w-[180px] md:w-[220px] h-[180px] md:h-[240px]"></div>
</div>

  
  
  </div>




  <div className="flex py-16">
    {/* Right Section (Image with Overlapping Square - Appears After Text on Mobile) */}
<div className="relative w-full md:w-1/2 flex items-center justify-center transition-transform duration-300 hover:scale-95 order-2 md:order-none mt-8 md:mt-8">
  
  {/* Image */}
  <img 
    src={Fala2}
    alt="Student Testimonial" 
    className="w-64 md:w-[300px] h-auto relative"
  />
  
  {/* Overlapping Square (Fixed Position & Proper Alignment) */}
  <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 border-[10px] md:border-[12px] border-black w-[180px] md:w-[220px] h-[180px] md:h-[240px]"></div>

</div>


      <div className="w-full md:w-1/2 md:text-left md:px-16 text-center justify-center mt-14 order-1 md:order-none">
    <img 
      src={Union}
      alt="Student Testimonial" 
      className="w-8 mb-4 md:mb-5 h-auto rounded-lg"
    />
    <h2 className="text-2xl font-bold mb-9 text-indigo-900">
           PROJECTS AND REPORT
        </h2>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check className="text-gray-900" /> Only projects carried out under any of the FALF’s
            7 sectors will be considered.
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-gray-900" /> Please submit the report of your projects in a
            well-written 1,000-word citation with supported media.
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-gray-900" /> Submit 3-5 minute videos showcasing your work.
          </li>
        </ul>
  </div></div>
  





  <div className="flex mb-16">
      <div className="w-full md:w-1/2 md:text-left md:pl-32 text-center justify-center mt-14 order-1 md:order-none">
    <img 
      src={Union}
      alt="Student Testimonial" 
      className="w-8 mb-4 md:mb-5 h-auto rounded-lg"
    />
    <h2 className="text-2xl mb-9 font-bold">MEMBERSHIP AND PARTICIPATION
        </h2>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check className="text-gray-800" /> Be a registered FALF Leadership Initiative Network
            (LIN) member.
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-gray-800" /> Demonstrate exemplary leadership in programs
            impacting at least 1,000 youth.
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-gray-800" /> All beneficiaries must be registered under LIN.
          </li>
        </ul>
  </div>
 {/* Right Section (Image with Overlapping Square - Appears After Text on Mobile) */}
<div className="relative w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-8 transition-transform duration-300 hover:scale-95 order-2 md:order-none">
  
  {/* Image */}
  <img 
    src={Fala3}
    alt="Student Testimonial" 
    className="w-64 md:w-[300px] h-auto relative"
  />
  
  {/* Overlapping Square (Fixed Position & Proper Alignment) */}
  <div className="absolute top-1/2 right-[40%] -translate-x-1/2 -translate-y-1/2 border-[10px] md:border-[12px] border-black w-[180px] md:w-[220px] h-[180px] md:h-[240px]"></div>

</div>

  </div>


    </div>







        </div>
    )
  };
  
  export default FALA;