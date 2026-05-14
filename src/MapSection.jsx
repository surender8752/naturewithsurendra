const PLACES = ["📍 Bijli Mahadev, Kullu", "📍 Manali, Himachal Pradesh", "📍 Tirthan Valley, HP"];
export default function MapSection() {
  return (
    <section className="bg-[#050505] px-5 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-green-400 uppercase tracking-[4px] text-sm">Journey Map</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">My Explored Territory</h2>
          <p className="text-gray-400 mt-6 max-w-xl leading-8">Places I've wandered through, photographed, and fallen in love with across Himachal Pradesh.</p>
        </div>
        <div className="rounded-3xl overflow-hidden border border-gray-800 h-[400px] md:h-[520px]">
          <iframe
            title="Explored Places"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918232.8!2d77.1!3d31.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904f5a44b5ece33%3A0x6d4e5a5d71e47bcc!2sManali%2C+Himachal+Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%" height="100%"
            style={{border:0, filter:"invert(90%) hue-rotate(180deg)"}}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {PLACES.map((p,i)=>(
            <div key={i} className="bg-[#111] border border-gray-800 rounded-2xl px-5 py-4 text-gray-300 font-medium hover:border-green-500 transition">{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
