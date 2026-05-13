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
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaMountain,
  FaWater,
  FaTree,
  FaMotorcycle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { IoSunny } from "react-icons/io5";

import { GiHiking } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] =
  useState(false);


  useEffect(() => {

  const playMusic = async () => {

    try {

      await audioRef.current.play();

      setIsPlaying(true);

    } catch (err) {

      console.log("Autoplay blocked");
    }
  };

  document.addEventListener(
    "click",
    playMusic
  );

  return () => {

    document.removeEventListener(
      "click",
      playMusic
    );
  };

}, []);

const toggleMusic = () => {

  if (isPlaying) {

    audioRef.current.pause();

    setIsPlaying(false);

  } else {

    audioRef.current.play();

    setIsPlaying(true);
  }
};

  return (
    
   

    
    <div className="bg-black text-white overflow-hidden">
     <audio ref={audioRef} loop>
  <source src={music} type="audio/mp3" />
</audio>

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
        <div className="relative z-10 h-full flex items-center px-5 md:px-20 pt-24">

          <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="max-w-2xl"
>

            <p className="uppercase tracking-[6px] text-sm text-gray-300">
              Explorer • Photographer
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mt-5">

              Explore. Capture.
              <br />

              <span className="text-green-400">
                Inspire.
              </span>

            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-300 leading-7 md:leading-8">
              Exploring the raw beauty of Himalayas,
              capturing moments that last forever.
            </p>

           <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <button className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full font-semibold">
                Explore Gallery
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Read Blogs
              </button>

            </div>

          </motion.div>

        </div>

      </section>
      {/* CATEGORY SECTION */}

<section className="bg-black px-5 md:px-10 py-10">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 md:grid-cols-6 gap-5">

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
      <div className="bg-[#111] border border-gray-800 rounded-2xl py-8 text-center hover:border-green-400 transition cursor-pointer">

        <h2 className="flex justify-center text-green-400 text-3xl mb-3">
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
{/* FEATURED GALLERY */}

<section id="gallery" className="bg-black px-5 md:px-10 py-20">

  <div className="max-w-7xl mx-auto">

    {/* TOP TEXT */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

      <div>

        <p className="text-green-400 uppercase tracking-[4px] text-sm">
          Gallery
        </p>

       <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Featured Gallery
        </h2>

        <p className="text-gray-400 mt-5 max-w-lg leading-8">
          A collection of my favorite shots from mountains,
          lakes, forests and journeys on the road.
        </p>

      </div>

      <button className="border border-green-400 text-green-400 px-7 py-3 rounded-full hover:bg-green-400 hover:text-black transition w-fit">
        View All Photos
      </button>

    </div>

    {/* GALLERY GRID */}
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
>

      {/* CARD 1 */}
      <div className="relative overflow-hidden rounded-3xl group h-[280px] sm:h-[380px] md:h-[500px]">

        <img
          src={mountain}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

        <div className="absolute bottom-6 left-6">

          <h2 className="text-2xl font-bold">
            Mountains
          </h2>

          <p className="text-gray-300">
            45 Photos
          </p>

        </div>

      </div>

      {/* CARD 2 */}
      <div className="relative overflow-hidden rounded-3xl group h-[280px] sm:h-[380px] md:h-[500px]">

        <img
          src={lake}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

        <div className="absolute bottom-6 left-6">

          <h2 className="text-2xl font-bold">
            Lakes
          </h2>

          <p className="text-gray-300">
            28 Photos
          </p>

        </div>

      </div>

      {/* CARD 3 */}
      <div className="relative overflow-hidden rounded-3xl group h-[280px] sm:h-[380px] md:h-[500px]">

        <img
          src={sunset}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

        <div className="absolute bottom-6 left-6">

          <h2 className="text-2xl font-bold">
            Sunsets
          </h2>

          <p className="text-gray-300">
            32 Photos
          </p>

        </div>

      </div>

      {/* CARD 4 */}
      <div className="relative overflow-hidden rounded-3xl group h-[280px] sm:h-[380px] md:h-[500px]">

        <img
          src={forest}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

        <div className="absolute bottom-6 left-6">

          <h2 className="text-2xl font-bold">
            Forests
          </h2>

          <p className="text-gray-300">
            26 Photos
          </p>

        </div>

      </div>

    </motion.div>

  </div>

</section>
{/* BLOG SECTION */}

<section id="blogs" className="bg-black px-5 md:px-10 py-20">

  <div className="max-w-7xl mx-auto">

    {/* TOP */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

      <div>

        <p className="text-green-400 uppercase tracking-[4px] text-sm">
          Blog
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Latest From The Blog
        </h2>

      </div>

      <button className="text-green-400 hover:text-white transition">
        View All Blogs →
      </button>

    </div>

    {/* BLOG GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

      {/* BLOG 1 */}
      <div className="bg-[#111] rounded-3xl overflow-hidden group border border-gray-800">

        <div className="overflow-hidden h-[260px]">

          <img
            src={blog1}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

        </div>

        <div className="p-6">

          <span className="text-green-400 text-sm">
            TREK
          </span>

          <h2 className="text-2xl font-bold mt-3 leading-snug">
            Bijli Mahadev Trek – A Spiritual Journey
          </h2>

          <p className="text-gray-400 mt-4">
            May 20, 2024 • 5 min read
          </p>

        </div>

      </div>

      {/* BLOG 2 */}
      <div className="bg-[#111] rounded-3xl overflow-hidden group border border-gray-800">

        <div className="overflow-hidden h-[260px]">

          <img
            src={blog2}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

        </div>

        <div className="p-6">

          <span className="text-green-400 text-sm">
            RIDE
          </span>

          <h2 className="text-2xl font-bold mt-3 leading-snug">
            A Monsoon Ride Through Himachal
          </h2>

          <p className="text-gray-400 mt-4">
            May 10, 2024 • 4 min read
          </p>

        </div>

      </div>

      {/* BLOG 3 */}
      <div className="bg-[#111] rounded-3xl overflow-hidden group border border-gray-800">

        <div className="overflow-hidden h-[260px]">

          <img
            src={blog3}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

        </div>

        <div className="p-6">

          <span className="text-green-400 text-sm">
            TRAVEL
          </span>

          <h2 className="text-2xl font-bold mt-3 leading-snug">
            Best Lakes To Visit In Himachal
          </h2>

          <p className="text-gray-400 mt-4">
            May 05, 2024 • 5 min read
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


{/* DESTINATIONS SECTION */}



<section id="destination" className="bg-black px-5 md:px-10 py-24">

  <div className="max-w-7xl mx-auto">

    {/* TOP */}
    <div className="mb-16">

      <p className="text-green-400 uppercase tracking-[4px] text-sm">
        Destinations
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Places I’ve Explored
      </h2>

      <p className="text-gray-400 mt-6 max-w-2xl leading-8">
        Some of the most beautiful places from Himachal Pradesh
        that inspired my photography and adventures.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="relative overflow-hidden rounded-3xl h-[320px] sm:h-[400px] md:h-[500px] group border border-gray-800 hover:border-green-400 transition">

        <img
          src={bij}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-8 left-8 z-10">

          <h3 className="text-3xl font-bold mb-4">
            Bijli Mahadev
          </h3>

          <p className="text-gray-300 leading-8 max-w-sm">
            A spiritual mountain destination near Kullu famous
            for trekking and breathtaking sunrise views.
          </p>

        </div>

      </div>

      {/* CARD 2 */}
      <div className="relative overflow-hidden rounded-3xl h-[320px] sm:h-[400px] md:h-[500px] group border border-gray-800 hover:border-green-400 transition">

        <img
          src={manali}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-8 left-8 z-10">

          <h3 className="text-3xl font-bold mb-4">
            Manali
          </h3>

          <p className="text-gray-300 leading-8 max-w-sm">
            Snow mountains, rivers and unforgettable road trips
            make Manali one of my favorite destinations.
          </p>

        </div>

      </div>

      {/* CARD 3 */}
      <div className="relative overflow-hidden rounded-3xl h-[320px] sm:h-[400px] md:h-[500px] group border border-gray-800 hover:border-green-400 transition">

        <img
          src={sk}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-8 left-8 z-10">

          <h3 className="text-3xl font-bold mb-4">
            Tirthan Valley
          </h3>

          <p className="text-gray-300 leading-8 max-w-sm">
            A peaceful hidden paradise filled with forests,
            rivers and untouched Himalayan beauty.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ABOUT SECTION */}

<section id="about" className="bg-black px-5 md:px-10 py-24">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

      {/* LEFT */}
      <div>

        <p className="text-green-400 uppercase tracking-[4px] text-sm">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
          Hey, I’m Surendra
        </h2>

        <p className="text-gray-400 mt-8 leading-8 text-lg">

          A nature lover, photographer, trekker and rider from
          Bilaspur, Himachal Pradesh.

          <br />
          <br />

          I believe every mountain, every road and every moment
          has a story to tell.

        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-4 mt-10">

          <div className="border border-gray-700 px-5 py-3 rounded-full">
            🌿 Nature Lover
          </div>

          <div className="border border-gray-700 px-5 py-3 rounded-full">
            📸 RCB Fan
          </div>

          <div className="border border-gray-700 px-5 py-3 rounded-full">
            🏔️ Dream Chaser
          </div>

        </div>

        <button className="mt-10 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full font-semibold">
          Know More About Me
        </button>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative overflow-hidden rounded-[40px] h-[400px] md:h-[650px] group">

        <img
          src={about}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      </div>

    </div>

  </div>

</section>
{/* CONTACT SECTION */}

<section
  id="contact"
  className="bg-black px-5 md:px-10 py-24 border-t border-gray-900"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT */}
    <div>

      <p className="text-green-400 uppercase tracking-[4px] text-sm">
        Contact
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
        Let’s Work Together
      </h2>

      <p className="text-gray-400 mt-6 leading-8 max-w-lg">
        Feel free to reach out for collaborations,
        travel shoots, nature photography projects
        or just a friendly hello.
      </p>

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-green-400 text-2xl" />
          <p className="text-gray-300">
            surenderthakur40437@gmail.com
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FaWhatsapp className="text-green-400 text-2xl" />
          <p className="text-gray-300">
            +91 6230182198
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FaInstagram className="text-green-400 text-2xl" />
          <p className="text-gray-300">
            @sk.rajput.1861
          </p>
        </div>

      </div>

    </div>

    {/* RIGHT */}

    <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-green-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-green-400"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-green-400"
        ></textarea>

        <button
          className="bg-green-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
</section>
{/* FOOTER */}

<footer className="bg-[#050505] border-t border-gray-800 px-5 md:px-10 py-16">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

      {/* LOGO */}
      <div>

        <h2 className="text-3xl font-bold text-green-400">
          NatureWithSurendra
        </h2>

        <p className="text-gray-400 mt-5 leading-8">

          Capturing nature,
          mountains and unforgettable journeys through photography.

        </p>

      </div>

      {/* LINKS */}
      <div>

        <h3 className="text-xl font-semibold mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li>
  <a href="#home" className="hover:text-green-400 transition">
    Home
  </a>
</li>

<li>
  <a href="#gallery" className="hover:text-green-400 transition">
    Gallery
  </a>
</li>

<li>
  <a href="#blogs" className="hover:text-green-400 transition">
    Blogs
  </a>
</li>

<li>
  <a href="#destination" className="hover:text-green-400 transition">
    Destinations
  </a>
</li>

<li>
  <a href="#about" className="hover:text-green-400 transition">
    About
  </a>
</li>

<li>
  <a href="#contact" className="hover:text-green-400 transition">
    Contact
  </a>
</li>

        </ul>

      </div>

      {/* CATEGORIES */}
      <div>

        <h3 className="text-xl font-semibold mb-6">
          Categories
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li>Mountains</li>
          <li>Lakes</li>
          <li>Sunsets</li>
          <li>Forests</li>
          <li>Trekking</li>
          <li>Riding</li>

        </ul>

      </div>

      {/* SOCIAL */}
      <div>

        <h3 className="text-xl font-semibold mb-6">
          Let’s Connect
        </h3>

        <p className="text-gray-400 leading-8">

          Feel free to reach out for collaborations,
          photoshoots or just a hello!

        </p>

        {/* SOCIAL ICONS */}
        {/* SOCIAL ICONS */}
<div className="flex gap-5 mt-8 text-2xl">

  <a
    href="#"
    className="hover:text-pink-500 transition"
  >
    <FaInstagram />
  </a>

  <a
    href="#"
    className="hover:text-red-500 transition"
  >
    <FaYoutube />
  </a>

  <a
    href="#"
    className="hover:text-green-500 transition"
  >
    <FaWhatsapp />
  </a>

  <a
    href="#"
    className="hover:text-blue-400 transition"
  >
    <FaEnvelope />
  </a>

</div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

      <p className="text-gray-500">
        © 2026 NatureWithSurendra. All rights reserved.
      </p>

      <p className="text-gray-500">
        Made with ❤️ in Himachal
      </p>

    </div>

  </div>

</footer>
{/* MUSIC BUTTON */}

<button
  onClick={toggleMusic}
  className="fixed bottom-6 right-6 z-50
  bg-green-500 hover:bg-green-600
  w-16 h-16 rounded-full
  text-2xl shadow-2xl
  flex items-center justify-center
  transition duration-300"
>

  {isPlaying ? "🎵" : "🔇"}

</button>

    </div>
  );
}

export default App;