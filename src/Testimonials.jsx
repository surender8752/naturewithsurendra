import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const DATA = [
  { name:"Rahul Sharma",  loc:"Delhi",      text:"Surendra's photography captures the soul of the Himalayas like no one else. Truly world-class work!", init:"RS" },
  { name:"Priya Thakur",  loc:"Chandigarh", text:"Did Bijli Mahadev trek with Surendra. His knowledge of mountains and passion for nature is truly inspiring!", init:"PT" },
  { name:"Akash Verma",   loc:"Shimla",     text:"The monsoon ride blog brought back so many memories. A true gift for storytelling through words and photos.", init:"AV" },
  { name:"Sneha Rawat",   loc:"Mumbai",     text:"I discovered Tirthan Valley through Surendra's Instagram — best trip of my life. His content is a treasure map!", init:"SR" },
  { name:"Vikram Singh",  loc:"Manali",     text:"As a local from Manali, I confirm — Surendra finds angles even locals miss. A true artist behind the lens.", init:"VS" },
];
export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % DATA.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-[#050505] px-4 sm:px-6 md:px-10 py-14 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-green-400 uppercase tracking-[3px] md:tracking-[4px] text-xs sm:text-sm">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:mt-4">What People Say</h2>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-40}} transition={{duration:0.4}} className="testimonial-card !p-6 sm:!p-8 md:!p-10">
            <div className="flex gap-1 mb-4 md:mb-6">{[...Array(5)].map((_,i)=><FaStar key={i} className="text-yellow-400 text-sm md:text-base"/>)}</div>
            <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-8 mb-6 md:mb-8">"{DATA[idx].text}"</p>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="avatar-ring !w-12 !h-12 md:!w-14 md:!h-14"><span className="text-white text-sm md:text-base">{DATA[idx].init}</span></div>
              <div><p className="font-bold text-white text-sm md:text-base">{DATA[idx].name}</p><p className="text-gray-400 text-xs md:text-sm">{DATA[idx].loc}</p></div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
          <button onClick={()=>setIdx(p=>(p-1+DATA.length)%DATA.length)} className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition text-sm"><FaChevronLeft/></button>
          <div className="flex gap-2">{DATA.map((_,i)=><button key={i} onClick={()=>setIdx(i)} className={`h-2 rounded-full transition-all ${i===idx?"bg-green-400 w-6":"bg-gray-600 w-2"}`}/>)}</div>
          <button onClick={()=>setIdx(p=>(p+1)%DATA.length)} className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition text-sm"><FaChevronRight/></button>
        </div>
      </div>
    </section>
  );
}
