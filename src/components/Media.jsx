import { motion } from "framer-motion";
import Media1 from '../assets/Media1.png';
import M1 from '../assets/M1.png';
import M2 from '../assets/M2.png';
import M3 from '../assets/M3.png';
import M4 from '../assets/M4.png';
import M5 from '../assets/M5.png';
import M6 from '../assets/M6.png';
import M7 from '../assets/M7.png';
import M8 from '../assets/M8.png';
import M10 from '../assets/M10.png';
import M9 from '../assets/M9.png';
import M11 from '../assets/M11.png';
import M12 from '../assets/M12.png';
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
function Media() {

    const winners = [
        {
          image: M1,
          year: "2024",
          color: "bg-[#BC99C3]",
        },
        {
          image: M2,
          year: "2023",
          color: "bg-[#706FAB]",
        },
        {
          image: M3,
          year: "2022",
          color: "bg-[#ED6031]",
        },
        {
          image: M4,
          year: "2021",
          color: "bg-[#BC99C3]",
        },
        
      ];

      const winnners = [
        {
          image: M5,
          year: "2020",
          color: "bg-[#706FAB]",
        },
        {
          image: M6,
          year: "2019",
          color: "bg-[#76B99A]",
        },
        {
          image: M7,
          year: "2018",
          color: "bg-[#000000]",
        },
        {
          image: M8,
          year: "2017",
          color: "bg-[#76B99A]",
        },
        
      ];
      const winnnerss = [
        {
          image: M9,
          year: "2016",
          color: "bg-[#656BC4]",
        },
        {
          image: M10,
          year: "2015",
          color: "bg-[#98DEE8]",
        },
        {
          image: M11,
          year: "2014",
          color: "bg-[#656BC4]",
        },
        {
          image: M12,
          year: "2013",
          color: "bg-[#76B99A]",
        },
        
      ];


    return ( 
        <div className="relative w-full  pt-8 bg-gradient-to-bl  from-[#706FAB] to-[#8887c4] min-h-screen">

<motion.div
  initial={{ rotateY: 90, opacity: 0 }}
  whileInView={{ rotateY: 2, opacity: 1 }}
  transition={{ duration: 0.9 }}
  className="bg-transparent text-white text-center"
>
      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center font-kanit justify-center mt-36 mb-16 text-white text-center px-16">
      <img 
          src={Arrow1}
          alt="Curved underline" 
          className="absolute right-1/2 md:right-[300px] -top-14 -translate-x-12 w-[80px] md:w-[90px]" 
        />
    <h1 className="text-4xl z-10 md:text-6xl lg:text-7xl font-kanit mb-8 px-8  leading-tight">
  OUR MEDIA TV
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


  <div className="bg-white px-20 py-6 flex justify-center items-center">
  <img src={Media1} alt="Sarah Eve" className="w-full h-auto tansition-transform duration-300 hover:scale-105  object-cover" />
</div>



<div className="bg-white px-2 py-4">
    <h1 className="text-center text-3xl font-bold justify-center mt-8 font-montserrat">FUTURE AFRICA LEADERS FOUNDATION STAR WINNERS</h1>
    <div className="flex  justify-center gap-0 px-10 mt-3 py-2">
      {winners.map((winner, index) => (
        <div key={index} className={` overflow-hidden tansition-transform duration-300 hover:scale-105 shadow-lg ${winner.color} text-white w-full`}>
          <img src={winner.image} alt={`FALA Star Winner ${winner.year}`} className="w-full  pt-4 pb-8 px-4 h-52 object-cover" />
          <div className="text-center pb-4 font-bold">
            {winner.year} FALA STAR <br/> WINNER
          </div>
        </div>
      ))}
    </div>


    <div className="flex justify-center gap-0 px-10 py-4">
      {winnners.map((winner, index) => (
        <div key={index} className={` overflow-hidden shadow-lg ${winner.color} text-white tansition-transform duration-300 hover:scale-105 w-full`}>
          <img src={winner.image} alt={`FALA Star Winner ${winner.year}`} className="w-full  pt-4 pb-8 px-4 h-52 object-cover" />
          <div className="text-center pb-4 font-bold">
            {winner.year} FALA STAR <br/> WINNER
          </div>
        </div>
      ))}
    </div>



    <div className="flex justify-center gap-0 mb-16 px-10 py-2">
      {winnnerss.map((winner, index) => (
        <div key={index} className={` overflow-hidden shadow-lg ${winner.color} text-white tansition-transform duration-300 hover:scale-105 w-full`}>
          <img src={winner.image} alt={`FALA Star Winner ${winner.year}`} className="w-full  pt-4 pb-8 px-4 h-52 object-cover" />
          <div className="text-center pb-4 font-bold">
            {winner.year} FALA STAR <br/> WINNER
          </div>
        </div>
      ))}
    </div>


    

</div>







  </div> 
  )
    };
  
  export default Media;