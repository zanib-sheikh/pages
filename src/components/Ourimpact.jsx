import { motion } from "framer-motion";
import Ourimpact1 from '../assets/Ourimpact1.png';
import Ourimpact2 from '../assets/Ourimpact2.png';
import { Check } from "lucide-react";
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';



function Ourimpact() {
    return ( 
        <div className="relative w-full  pt-8 bg-gradient-to-bl  from-[#706FAB] to-[#8887c4] min-h-screen">

<motion.div
  initial={{ rotateY: 90, opacity: 0 }}
  whileInView={{ rotateY: 2, opacity: 1 }}
  transition={{ duration: 0.9 }}
  className="bg-transparent text-white text-center"
>
      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-36 mb-16 text-white text-center px-16">
      <img 
          src={Arrow1}
          alt="Curved underline" 
          className="absolute right-1/2 md:right-[150px] -top-14 -translate-x-12 w-[80px] md:w-[90px]" 
        />
    <h1 className="text-4xl z-10 md:text-6xl lg:text-7xl font-kanit mb-8 px-8  leading-tight">
   CENTRAL AFRICA REGION <br/> IMPACT REPORTS
    </h1>
    <img 
          src={Orange}
          alt="Curved underline" 
          className="absolute left-1/2 md:left-[440px] bottom-[160px] -translate-x-1/2 w-[180px] md:w-[370px]" 
        />

    <p className="mt-6 sm:px-11 px-2 text-sm font-montserrat sm:text-base  md:text-sm lg:text-sm max-w-4xl">
    Rev.Chris Oyakhilome
  
    </p>
    <p className='  hover:text-green-500 font-montserrat md:text-sm lg:text-sm cursor-pointer '>  DSc, DSc, DD</p>
  </div>
  </motion.div>



  <div className="w-full px-12 md:px-20 flex  justify-center bg-white gap-20 font-montserrat py-12">
  {/* Card 1 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact1} alt="Gabon" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white p-3 h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">HEALTH AND WELLNESS INITIATIVE GABON</h3>
      <p>Eco Friendly Bags and Baskets A Step Towards Sustainable Living in Malawi</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">GABON</div>
  </div>

  {/* Card 2 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact2} alt="Congo" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">QUALITY EDUCATION – CONGO BRAZZAVILLE</h3>
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">CONGO BRAZZAVILLE</div>
  </div>

  {/* Card 3 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact1} alt="Angola" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">IMPACT REPORT FROM ANGOLA</h3>
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">ANGOLA</div>
  </div>
</div>


<div className="w-full px-12 md:px-20 flex  justify-center bg-white gap-20 font-montserrat py-12">
  {/* Card 1 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact1} alt="Gabon" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white p-3 h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">HEALTH AND WELLNESS INITIATIVE GABON</h3>
      <p>Eco Friendly Bags and Baskets A Step Towards Sustainable Living in Malawi</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">GABON</div>
  </div>

  {/* Card 2 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact2} alt="Congo" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">QUALITY EDUCATION – CONGO BRAZZAVILLE</h3>
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">CONGO BRAZZAVILLE</div>
  </div>

  {/* Card 3 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact1} alt="Angola" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">IMPACT REPORT FROM ANGOLA</h3>
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">ANGOLA</div>
  </div>
</div>


<div className="w-full px-12 md:px-20 flex  justify-center bg-white gap-20 font-montserrat py-12">
  {/* Card 1 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact1} alt="Gabon" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white p-3 h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">HEALTH AND WELLNESS INITIATIVE GABON</h3>
      <p>Eco Friendly Bags and Baskets A Step Towards Sustainable Living in Malawi</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">GABON</div>
  </div>

  {/* Card 2 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact2} alt="Congo" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">QUALITY EDUCATION – CONGO BRAZZAVILLE</h3>
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">CONGO BRAZZAVILLE</div>
  </div>

  {/* Card 3 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact1} alt="Angola" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">IMPACT REPORT FROM ANGOLA</h3>
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">ANGOLA</div>
  </div>
</div>


<div className="w-full px-12 md:px-20 flex  justify-center bg-white gap-20 font-montserrat py-12">
  {/* Card 1 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact1} alt="Gabon" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white p-3 h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">HEALTH AND WELLNESS INITIATIVE GABON</h3>
      <p>Eco Friendly Bags and Baskets A Step Towards Sustainable Living in Malawi</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">GABON</div>
  </div>

  {/* Card 2 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact2} alt="Congo" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">QUALITY EDUCATION – CONGO BRAZZAVILLE</h3>
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">CONGO BRAZZAVILLE</div>
  </div>

  {/* Card 3 */}
  <div className="w-full bg-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-400 rounded-xl overflow-hidden">
    <img src={Ourimpact1} alt="Angola" className="w-full h-[220px] object-cover" />
    <div className="bg-[#706FAB] text-white h-[140px] px-3 py-2">
      <h3 className="font-semibold text-lg">IMPACT REPORT FROM ANGOLA</h3>
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-purple-400 h-[50px] flex items-center justify-center text-xl text-white font-semibold">ANGOLA</div>
  </div>
</div>







</div>


)
  };
  
  export default Ourimpact;