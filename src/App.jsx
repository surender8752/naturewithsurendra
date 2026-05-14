import music from "./assets/nature-music.mp3";  
import about from "./assets/about.jpg";
import hero from "./assets/hero.jpg";
import mountain from "./assets/mountain.jpg";
import lake from "./assets/lake.jpg";
import sunset from "./assets/sunset.jpg";
import forest from "./assets/forest.jpg";
import bij from "./assets/bij.jpg";
import manali from "./assets/manali.jpg";
import sk from "./assets/sk.jpg";


import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import {
  FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope,
  FaMountain, FaWater, FaTree, FaMotorcycle,
  FaBars, FaTimes, FaArrowUp, FaSearchPlus,
} from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { GiHiking } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import VideoSection from "./VideoSection";
import MapSection from "./MapSection";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [fStatus, setFStatus] = useState("idle");
  const [fData, setFData] = useState({ name:"", email:"", message:"" });
  const formRef = useRef(null);


  useEffect(() => {
    const playMusic = async () => {
      try { await audioRef.current.play(); setIsPlaying(true); } catch(e){}
    };
    document.addEventListener("click", playMusic, { once: true });
    return () => document.removeEventListener("click", playMusic);
  }, []);

  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleMusic = () => {
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
    else { audioRef.current.play(); setIsPlaying(true); }
  };
  const openLightbox = (src, title) => { setLightbox({src,title}); document.body.style.overflow="hidden"; };
  const closeLightbox = () => { setLightbox(null); document.body.style.overflow="auto"; };
  const handleSubmit = async (e) => {
    e.preventDefault(); setFStatus("sending");
    try {
      await emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",formRef.current,"YOUR_PUBLIC_KEY");
      setFStatus("success"); setFData({name:"",email:"",message:""});
    } catch { setFStatus("error"); }
  };

  return (
    
   

    
    <div className="bg-black text-white overflow-hidden">
      <audio ref={audioRef} loop><source src={music} type="audio/mp3" /></audio>

      {/* SCROLL PROGRESS */}
      <div className="scroll-progress" style={{width:`${progress}%`}} />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="lightbox-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={closeLightbox}>
            <motion.img className="lightbox-img" src={lightbox.src} alt={lightbox.title} initial={{scale:0.8}} animate={{scale:1}} onClick={e=>e.stopPropagation()} />
            <button className="lightbox-close" onClick={closeLightbox}><FaTimes/></button>
            <p className="absolute bottom-8 text-white text-lg font-semibold">{lightbox.title}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
     <section
  id="home"
  className="h-screen relative overflow-hidden"
>

  <img
    src={hero}
    alt=""
    className="absolute inset-0 w-full h-full object-cover hero-image"
  />

        {/* DARK OVERLAY */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80"></div>

{/* CLOUDS */}
<div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">

  <div className="cloud cloud1"></div>
  <div className="cloud cloud2"></div>
  <div className="cloud cloud3"></div>

</div>

{/* PARTICLES */}

<div className="particles">

  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>

</div>

      


        

        {/* NAVBAR */}
    <nav className="navbar fixed top-0 left-0 w-full z-50
flex items-center justify-between px-5 md:px-12 py-5">

          {/* LOGO */}
          <div>

            <h1 className="text-2xl font-bold text-green-400">
              NatureWithSurendra
            </h1>

            <p className="text-xs tracking-[3px] text-gray-300">
              CAPTURING NATURE
            </p>

          </div>

          {/* MENU */}
          <ul className="hidden lg:flex gap-10 text-sm text-white">

               <a href="#home" className="text-green-400 cursor-pointer">
  Home
</a>

              <a href="#gallery" className="cursor-pointer hover:text-green-400 transition">
  Gallery
</a>

             <a href="#blogs" className="cursor-pointer hover:text-green-400 transition">
  Blogs
</a>

            <a href="#destination" className="cursor-pointer hover:text-green-400 transition">
              Destinations
            </a>

               <a href="#about" className="cursor-pointer hover:text-green-400 transition">
  About Me
</a>

            <a href="#contact" className="cursor-pointer hover:text-green-400 transition">
              Contact
            </a>

          </ul>
               <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="lg:hidden text-2xl text-white"
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>


        </nav>

        {/* MOBILE MENU */}

{menuOpen && (

  <div className="fixed top-[80px] left-0 w-full bg-black/95 backdrop-blur-md z-40 lg:hidden">

    <ul className="flex flex-col items-center gap-8 py-10 text-lg">

      <a href="#home" onClick={() => setMenuOpen(false)} className="text-green-400 cursor-pointer">
  Home
</a>

      <a href="#gallery" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-green-400 transition">
  Gallery
</a>

     <a href="#blogs" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-green-400 transition">
  Blogs
</a>

      <a href="#destination" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-green-400 transition">
        Destinations
      </a>

      <a href="#about" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-green-400 transition">
  About Me
</a>

      <a href="#contact" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-green-400 transition">
        Contact
      </a>

    </ul>

  </div>

)}
   

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-20 pt-20 md:pt-24">

          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="max-w-2xl"
>

            <p className="uppercase tracking-[4px] md:tracking-[6px] text-xs md:text-sm text-gray-300">Explorer • Photographer</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4 md:mt-5">
              Explore. Capture.<br/>
              <span className="text-green-400">Inspire.</span>
            </h1>
            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-7 md:leading-8">Exploring the raw beauty of Himalayas, capturing moments that last forever.</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mt-8 md:mt-10">
              <a href="#gallery" className="w-full sm:w-auto"><button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base">Explore Gallery</button></a>
              <a href="#blogs" className="w-full sm:w-auto"><button className="w-full sm:w-auto border border-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-black transition text-sm md:text-base">Read Blogs</button></a>
            </div>

          </motion.div>

        </div>

      </section>

      {/* STATS */}
      <Stats />

      {/* CATEGORY SECTION */}

<section className="bg-black px-4 sm:px-6 md:px-10 py-8 md:py-10">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5">

      {/* CARD 1 */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl py-8 text-center hover:border-green-400 transition cursor-pointer">

        <h2 className="flex justify-center text-green-400 text-3xl mb-3">
          <FaMountain />
        </h2>

        <p className="text-white font-medium">
          Mountains
        </p>

      </div>

      {/* CARD 2 */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl py-8 text-center hover:border-green-400 transition cursor-pointer">

        <h2 className="flex justify-center text-green-400 text-3xl mb-3">
          <FaWater />
        </h2>

        <p className="text-white font-medium">
          Lakes
        </p>

      </div>

      {/* CARD 3 */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl py-5 md:py-8 text-center hover:border-green-400 transition cursor-pointer">
        <h2 className="flex justify-center text-green-400 text-2xl md:text-3xl mb-2 md:mb-3">
          <IoSunny />
        </h2>

        <p className="text-white font-medium">
          Sunsets
        </p>

      </div>

      {/* CARD 4 */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl py-8 text-center hover:border-green-400 transition cursor-pointer">

        <h2 className="flex justify-center text-green-400 text-3xl mb-3">
          <FaTree />
        </h2>

        <p className="text-white font-medium">
          Forests
        </p>

      </div>

      {/* CARD 5 */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl py-8 text-center hover:border-green-400 transition cursor-pointer">

        <h2 className="flex justify-center text-green-400 text-3xl mb-3">
          <GiHiking />
        </h2>

        <p className="text-white font-medium">
          Trekking
        </p>

      </div>

      {/* CARD 6 */}
      <div className="bg-[#111] border border-gray-800 rounded-2xl py-8 text-center hover:border-green-400 transition cursor-pointer">

        <h2 className="flex justify-center text-green-400 text-3xl mb-3">
          <FaMotorcycle />
        </h2>

        <p className="text-white font-medium">
          Riding
        </p>

      </div>

    </div>

  </div>

</section>
<section id="gallery" className="bg-black px-4 sm:px-6 md:px-10 py-14 md:py-20">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8 mb-10 md:mb-14">
      <div>
        <p className="text-green-400 uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm">Gallery</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:mt-4">Featured Gallery</h2>
        <p className="text-gray-400 mt-3 md:mt-5 max-w-lg leading-7 md:leading-8 text-sm md:text-base">A collection of my favorite shots from mountains, lakes, forests and journeys on the road.</p>
      </div>
      <button className="border border-green-400 text-green-400 px-5 md:px-7 py-2.5 md:py-3 rounded-full hover:bg-green-400 hover:text-black transition w-fit text-sm md:text-base">View All Photos</button>
    </div>

    {/* GALLERY GRID */}
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.05 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
>

      {/* CARD 1 */}
      <div className="relative overflow-hidden rounded-3xl group h-[280px] sm:h-[380px] md:h-[500px] cursor-pointer" onClick={()=>openLightbox(mountain,"Mountains")}>
        <img src={mountain} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="zoom-layer"><FaSearchPlus className="zoom-icon" /></div>
        <div className="absolute bottom-6 left-6"><h2 className="text-2xl font-bold">Mountains</h2><p className="text-gray-300">45 Photos</p></div>
      </div>

      {/* CARD 2 */}
      <div className="relative overflow-hidden rounded-3xl group h-[280px] sm:h-[380px] md:h-[500px] cursor-pointer" onClick={()=>openLightbox(lake,"Lakes")}>
        <img src={lake} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="zoom-layer"><FaSearchPlus className="zoom-icon" /></div>
        <div className="absolute bottom-6 left-6"><h2 className="text-2xl font-bold">Lakes</h2><p className="text-gray-300">28 Photos</p></div>
      </div>

      {/* CARD 3 */}
      <div className="relative overflow-hidden rounded-3xl group h-[280px] sm:h-[380px] md:h-[500px] cursor-pointer" onClick={()=>openLightbox(sunset,"Sunsets")}>
        <img src={sunset} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="zoom-layer"><FaSearchPlus className="zoom-icon" /></div>
        <div className="absolute bottom-6 left-6"><h2 className="text-2xl font-bold">Sunsets</h2><p className="text-gray-300">32 Photos</p></div>
      </div>

      {/* CARD 4 */}
      <div className="relative overflow-hidden rounded-3xl group h-[280px] sm:h-[380px] md:h-[500px] cursor-pointer" onClick={()=>openLightbox(forest,"Forests")}>
        <img src={forest} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="zoom-layer"><FaSearchPlus className="zoom-icon" /></div>
        <div className="absolute bottom-6 left-6"><h2 className="text-2xl font-bold">Forests</h2><p className="text-gray-300">26 Photos</p></div>
      </div>

    </motion.div>

  </div>

</section>

      {/* VIDEO */}
      <VideoSection />

{/* BLOG SECTION */}

<section id="blogs" className="bg-black px-4 sm:px-6 md:px-10 py-14 md:py-20">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8 mb-10 md:mb-14">
      <div>
        <p className="text-green-400 uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm">Blog</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:mt-4">Latest From The Blog</h2>
      </div>
      <button className="text-green-400 hover:text-white transition text-sm md:text-base">View All Blogs →</button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
      {[{img:blog1,cat:"TREK",title:"Bijli Mahadev Trek – A Spiritual Journey",date:"May 20, 2024 • 5 min read"},{img:blog2,cat:"RIDE",title:"A Monsoon Ride Through Himachal",date:"May 10, 2024 • 4 min read"},{img:blog3,cat:"TRAVEL",title:"Best Lakes To Visit In Himachal",date:"May 05, 2024 • 5 min read"}].map((b,i)=>(
        <div key={i} className="bg-[#111] rounded-2xl md:rounded-3xl overflow-hidden group border border-gray-800 hover:border-green-500 transition">
          <div className="overflow-hidden h-[200px] md:h-[260px]"><img src={b.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" /></div>
          <div className="p-4 md:p-6"><span className="text-green-400 text-xs md:text-sm">{b.cat}</span><h2 className="text-lg md:text-2xl font-bold mt-2 md:mt-3 leading-snug">{b.title}</h2><p className="text-gray-400 mt-2 md:mt-4 text-xs md:text-sm">{b.date}</p></div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* TESTIMONIALS */}
      <Testimonials />

<section id="destination" className="bg-black px-4 sm:px-6 md:px-10 py-14 md:py-24">
  <div className="max-w-7xl mx-auto">
    <div className="mb-10 md:mb-16">
      <p className="text-green-400 uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm">Destinations</p>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:mt-4">Places I've Explored</h2>
      <p className="text-gray-400 mt-4 md:mt-6 max-w-2xl leading-7 md:leading-8 text-sm md:text-base">Some of the most beautiful places from Himachal Pradesh that inspired my photography and adventures.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
      {[{img:bij,name:"Bijli Mahadev",desc:"A spiritual mountain destination near Kullu famous for trekking and breathtaking sunrise views."},{img:manali,name:"Manali",desc:"Snow mountains, rivers and unforgettable road trips make Manali one of my favorite destinations."},{img:sk,name:"Tirthan Valley",desc:"A peaceful hidden paradise filled with forests, rivers and untouched Himalayan beauty."}].map((d,i)=>(
        <div key={i} className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[260px] sm:h-[360px] md:h-[500px] group border border-gray-800 hover:border-green-400 transition">
          <img src={d.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 z-10">
            <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">{d.name}</h3>
            <p className="text-gray-300 leading-7 md:leading-8 max-w-sm text-sm md:text-base">{d.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* MAP */}
      <MapSection />

<section id="about" className="bg-black px-4 sm:px-6 md:px-10 py-14 md:py-24">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
      <div>
        <p className="text-green-400 uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm">About Me</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:mt-5 leading-tight">Hey, I'm Surendra</h2>
        <p className="text-gray-400 mt-5 md:mt-8 leading-7 md:leading-8 text-sm md:text-lg">A nature lover, photographer, trekker and rider from Bilaspur, Himachal Pradesh.<br/><br/>I believe every mountain, every road and every moment has a story to tell.</p>
        <div className="flex flex-wrap gap-2 md:gap-4 mt-6 md:mt-10">
          {["🌿 Nature Lover","📸 RCB Fan","🏔️ Dream Chaser"].map((t,i)=>(
            <div key={i} className="border border-gray-700 px-3 md:px-5 py-2 md:py-3 rounded-full text-sm md:text-base">{t}</div>
          ))}
        </div>
        <button className="mt-6 md:mt-10 bg-green-500 hover:bg-green-600 transition px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base">Know More About Me</button>
      </div>
      <div className="relative overflow-hidden rounded-[24px] md:rounded-[40px] h-[300px] sm:h-[400px] md:h-[650px] group">
        <img src={about} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </div>
  </div>
</section>

<section id="contact" className="bg-black px-4 sm:px-6 md:px-10 py-14 md:py-24 border-t border-gray-900">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
    <div>
      <p className="text-green-400 uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm">Contact</p>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 md:mt-4 leading-tight">Let's Work Together</h2>
      <p className="text-gray-400 mt-4 md:mt-6 leading-7 md:leading-8 max-w-lg text-sm md:text-base">Feel free to reach out for collaborations, travel shoots, nature photography projects or just a friendly hello.</p>
      <div className="mt-6 md:mt-10 space-y-4 md:space-y-5">
        <div className="flex items-center gap-3 md:gap-4"><FaEnvelope className="text-green-400 text-xl md:text-2xl flex-shrink-0" /><p className="text-gray-300 text-sm md:text-base break-all">surenderthakur40437@gmail.com</p></div>
        <div className="flex items-center gap-3 md:gap-4"><FaWhatsapp className="text-green-400 text-xl md:text-2xl flex-shrink-0" /><p className="text-gray-300 text-sm md:text-base">+91 6230182198</p></div>
        <div className="flex items-center gap-3 md:gap-4"><FaInstagram className="text-green-400 text-xl md:text-2xl flex-shrink-0" /><p className="text-gray-300 text-sm md:text-base">@sk.rajput.1861</p></div>
      </div>
    </div>
    <div className="bg-[#111] border border-gray-800 rounded-2xl md:rounded-3xl p-5 md:p-8">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <input type="text" name="name" placeholder="Your Name" required className="w-full bg-black border border-gray-700 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-green-400 text-sm md:text-base" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full bg-black border border-gray-700 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-green-400 text-sm md:text-base" />
        <textarea rows="4" name="message" placeholder="Your Message" required className="w-full bg-black border border-gray-700 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-green-400 text-sm md:text-base"></textarea>
        <button type="submit" disabled={fStatus==="sending"} className="w-full sm:w-auto bg-green-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white transition text-sm md:text-base disabled:opacity-60">
          {fStatus==="sending"?"Sending...":fStatus==="success"?"✅ Sent!":fStatus==="error"?"❌ Try Again":"Send Message"}
        </button>
      </form>
    </div>
  </div>
</section>
<footer className="bg-[#050505] border-t border-gray-800 px-4 sm:px-6 md:px-10 py-12 md:py-16">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      <div className="col-span-2 md:col-span-1">
        <h2 className="text-2xl md:text-3xl font-bold text-green-400">NatureWithSurendra</h2>
        <p className="text-gray-400 mt-3 md:mt-5 leading-7 md:leading-8 text-sm md:text-base">Capturing nature, mountains and unforgettable journeys through photography.</p>
      </div>
      <div>
        <h3 className="text-base md:text-xl font-semibold mb-4 md:mb-6">Quick Links</h3>
        <ul className="space-y-2 md:space-y-4 text-gray-400 text-sm md:text-base">
          {["home","gallery","blogs","destination","about","contact"].map(s=>(
            <li key={s}><a href={`#${s}`} className="hover:text-green-400 transition capitalize">{s==="destination"?"Destinations":s==="about"?"About":s.charAt(0).toUpperCase()+s.slice(1)}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-base md:text-xl font-semibold mb-4 md:mb-6">Categories</h3>
        <ul className="space-y-2 md:space-y-4 text-gray-400 text-sm md:text-base">
          {["Mountains","Lakes","Sunsets","Forests","Trekking","Riding"].map(c=>(<li key={c}>{c}</li>))}
        </ul>
      </div>
      <div>
        <h3 className="text-base md:text-xl font-semibold mb-4 md:mb-6">Let's Connect</h3>
        <p className="text-gray-400 leading-7 md:leading-8 text-sm md:text-base">Feel free to reach out for collaborations, photoshoots or just a hello!</p>
        <div className="flex gap-4 md:gap-5 mt-6 md:mt-8 text-xl md:text-2xl">
          <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
          <a href="https://wa.me/916230182198" target="_blank" rel="noreferrer" className="hover:text-green-500 transition"><FaWhatsapp /></a>
          <a href="mailto:surenderthakur40437@gmail.com" className="hover:text-blue-400 transition"><FaEnvelope /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-10 md:mt-16 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5 text-center">
      <p className="text-gray-500 text-xs md:text-sm">© 2026 NatureWithSurendra. All rights reserved.</p>
      <p className="text-gray-500 text-xs md:text-sm">Made with ❤️ in Himachal</p>
    </div>
  </div>
</footer>
{/* MUSIC BUTTON */}
<button onClick={toggleMusic} className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full text-2xl shadow-2xl flex items-center justify-center transition duration-300">
  {isPlaying ? "🎵" : "🔇"}
</button>

{/* BACK TO TOP */}
{showTop && (
  <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="back-to-top" aria-label="Back to top">
    <FaArrowUp />
  </button>
)}

    </div>
  );
}

export default App;