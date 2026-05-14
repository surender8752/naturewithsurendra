import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import manali from "./assets/manali.jpg";
export default function VideoSection() {
  const [show, setShow] = useState(false);
  return (
    <section className="bg-[#050505] px-4 sm:px-6 md:px-10 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-green-400 uppercase tracking-[3px] md:tracking-[4px] text-xs sm:text-sm">Featured Reel</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:mt-4">Watch My Journey</h2>
        </div>
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[220px] sm:h-[320px] md:h-[520px] group cursor-pointer" onClick={()=>setShow(true)}>
          <img src={manali} alt="Video Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="play-btn !w-14 !h-14 md:!w-20 md:!h-20"><FaPlay className="text-white text-lg md:text-2xl ml-1"/></div>
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
            <p className="text-green-400 uppercase tracking-[2px] md:tracking-[3px] text-xs mb-1 md:mb-2">Latest Video</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Himachal — A Love Story</h3>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div className="lightbox-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setShow(false)}>
            <motion.div initial={{scale:0.85}} animate={{scale:1}} onClick={e=>e.stopPropagation()} className="w-full max-w-4xl mx-4 aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" allow="autoplay; encrypted-media" allowFullScreen title="Nature Reel"/>
            </motion.div>
            <button className="lightbox-close" onClick={()=>setShow(false)}><FaTimes/></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
