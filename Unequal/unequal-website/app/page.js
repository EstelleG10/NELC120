const HOME_IMAGE = "/HOME_IMAGE.jpeg";

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
          <a href="/brewing" className="text-yellow-400 hover:underline">brewing</a>,
          analyze <a href="/trace-residue" className="text-orange-400 hover:underline">trace residues</a>, 
          and curate artifacts in a <a href="/museum" className="text-blue-400 hover:underline">museum exhibit</a>. 
          Explore our findings in the <a href="/gallery" className="text-red-400 hover:underline">image gallery</a> or read about them as described by the
           <a href="/journalism" className="text-purple-700 hover:underline">journalism group</a> .
        </p>

        {/* Navigation Buttons */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <a href="/brewing" className="px-6 py-3 rounded-xl bg-yellow-600 text-white font-semibold text-lg hover:bg-yellow-400 transition-all shadow-lg">
            Brewing 
          </a>
          <a href="/museum" className="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold text-lg hover:bg-blue-400 transition-all shadow-lg">
            Museum Exhibit
          </a>
          <a href="/gallery" className="px-6 py-3 rounded-xl bg-red-700 text-white font-semibold text-lg hover:bg-red-400 transition-all shadow-lg">
            Image Gallery
          </a>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6">
          <a href="/trace-residue" className="px-6 py-3 rounded-xl bg-orange-700 text-white font-semibold text-lg hover:bg-orange-400 transition-all shadow-lg">
            Trace Residue
          </a>
          <a href="/journalism" className="px-6 py-3 rounded-xl bg-purple-800 text-white font-semibold text-lg hover:bg-red-400 transition-all shadow-lg">
            Journalism Group 
          </a>  
        </div>
      </div>
    </div>
  );
}
