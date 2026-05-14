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
    <div className="text-center p-8 bg-[#0a0a0a] rounded-3xl border border-gray-800 hover:border-green-500 transition duration-300 group">
      <p className="stat-number text-6xl font-black">{n}{suf}</p>
      <p className="text-gray-400 mt-3 text-lg">{label}</p>
    </div>
  );
}
export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="bg-[#050505] px-5 md:px-10 py-20 border-y border-gray-900">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-green-400 uppercase tracking-[4px] text-sm mb-4">By The Numbers</p>
        <h2 className="text-4xl font-bold text-center mb-14">Journey In Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => <Counter key={i} {...s} active={active} />)}
        </div>
      </div>
    </section>
  );
}
