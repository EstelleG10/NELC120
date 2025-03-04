const HOME_IMAGE = "/HOME_IMAGE1.jpg";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 relative"
      style={{ backgroundImage: `url(${HOME_IMAGE})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg">
          UNEQUAL
        </h1>
        <p className="text-lg mt-4 text-gray-300 max-w-2xl leading-relaxed">
          <span className="font-semibold text-white">UNEQUAL</span> is an interactive course exploring power,
          inequality, and ancient societies. Through hands-on experimentation, we study   
          <a href="/brewing" className="text-[#cc9933] hover:underline font-extrabold hover:text-[#C19A6B] hover:underline transition-all duration-300"> brewing</a>,
          analyze <a href="/trace-residue" className="text-[#cc9933] hover:underline font-extrabold hover:text-[#C19A6B] hover:underline transition-all duration-300">trace residues</a>, 
          and curate artifacts in a <a href="/museum" className="text-[#cc9933] hover:underline  font-extrabold hover:text-[#C19A6B] hover:underline transition-all duration-300">museum exhibit</a>. 
          Explore our findings in the <a href="/gallery" className="text-[#cc9933] hover:underline font-extrabold hover:text-[#C19A6B] hover:underline transition-all duration-300">image gallery</a> or read about them as described by the
          <a href="/journalism" className="text-[#cc9933] hover:underline font-extrabold hover:text-[#C19A6B] hover:underline transition-all duration-300"> journalism group</a>.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-3xl">
          <a href="/brewing" className="px-6 py-3 w-60 text-center rounded-xl bg-[#cc9933] text-white font-semibold text-lg hover:bg-[#5D4037] transition-all shadow-lg">
            Brewing 
          </a>
          <a href="/museum" className="px-6 py-3 w-60 text-center rounded-xl bg-[#cc9933] text-white font-semibold text-lg hover:bg-[#5D4037] transition-all shadow-lg">
            Museum Exhibit
          </a>
          <a href="/gallery" className="px-6 py-3 w-60 text-center rounded-xl bg-[#cc9933] text-white font-semibold text-lg hover:bg-[#5D4037] transition-all shadow-lg">
            Image Gallery
          </a>
          <a href="/trace-residue" className="px-6 py-3 w-60 text-center rounded-xl bg-[#cc9933] text-white font-semibold text-lg hover:bg-[#5D4037] transition-all shadow-lg">
            Trace Residue
          </a>
          <a href="/journalism" className="px-6 py-3 w-60 text-center rounded-xl bg-[#cc9933] text-white font-semibold text-lg hover:bg-[#5D4037] transition-all shadow-lg">
            Journalism Group 
          </a> 
          <a href="/cooking_event" className="px-6 py-3 w-60 text-center rounded-xl bg-[#cc9933] text-white font-semibold text-lg hover:bg-[#5D4037] transition-all shadow-lg">
            Cooking Event 
          </a> 
        </div>
      </div>
    </div>
  );
}
