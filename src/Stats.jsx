import { useState, useEffect, useRef } from "react";
const STATS = [
  { val:500, suf:"+", label:"Photos Captured" },
  { val:20,  suf:"+", label:"Treks Completed" },
  { val:15,  suf:"+", label:"Places Explored" },
  { val:5,   suf:"+", label:"Years Experience" },
];
function Counter({ val, suf, label, active }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0; const step = val / 120;
    const t = setInterval(() => { cur += step; if (cur >= val) { setN(val); clearInterval(t); } else setN(Math.floor(cur)); }, 16);
    return () => clearInterval(t);
  }, [active, val]);
  return (
    <div className="text-center p-4 sm:p-6 md:p-8 bg-[#0a0a0a] rounded-2xl md:rounded-3xl border border-gray-800 hover:border-green-500 transition duration-300">
      <p className="stat-number text-4xl sm:text-5xl md:text-6xl font-black">{n}{suf}</p>
      <p className="text-gray-400 mt-2 md:mt-3 text-sm sm:text-base md:text-lg">{label}</p>
    </div>
  );
}
export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="bg-[#050505] px-4 sm:px-6 md:px-10 py-14 md:py-20 border-y border-gray-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-green-400 uppercase tracking-[3px] md:tracking-[4px] text-xs sm:text-sm mb-3 md:mb-4">By The Numbers</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">Journey In Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => <Counter key={i} {...s} active={active} />)}
        </div>
      </div>
    </section>
  );
}
