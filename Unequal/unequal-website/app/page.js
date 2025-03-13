const BACKGROUND_IMAGE = "/AI.webp";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 relative font-serif"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
        <h2 className="text-3xl text-white font-extrabold tracking-widest drop-shadow-lg">UNEQUAL</h2>
        <nav className="flex gap-6">
          <a href="/" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Home</a>
          <a href="/brewing" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Brewing</a>
          <a href="/museum" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Museum</a>
          <a href="/gallery" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Gallery</a>
          <a href="/trace-residue" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Trace Residue</a>
          <a href="/journalism" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Brewing Event</a>
          <a href="/cooking_event" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Cooking Event</a>
        </nav>
      </header>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 bg-black/80 p-10 rounded-xl text-white text-center max-w-3xl shadow-lg border-4 border-dashed border-[#b33000] mt-16">
        <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg">𓏋 𓏏 𓏊 UNEQUAL 𓏊 𓏏 𓏋</h1>
        <p className="text-lg mt-4 text-gray-300 leading-relaxed">
          <span className="font-semibold text-white">UNEQUAL</span> is an interactive course exploring power, inequality, and ancient societies. Through hands-on experimentation, we study
          <a href="/brewing" className="text-[#B38054] hover:underline font-extrabold hover:text-[#C19A6B] transition-all duration-300"> brewing</a>,
          analyze <a href="/trace-residue" className="text-[#B38054] hover:underline font-extrabold hover:text-[#C19A6B] transition-all duration-300">trace residues</a>,
          and curate artifacts in a <a href="/museum" className="text-[#B38054] hover:underline font-extrabold hover:text-[#C19A6B] transition-all duration-300">museum exhibit</a>.
          Explore our findings in the <a href="/gallery" className="text-[#B38054] hover:underline font-extrabold hover:text-[#C19A6B] transition-all duration-300">image gallery</a> or read about them as described by the
          <a href="/journalism" className="text-[#B38054] hover:underline font-extrabold hover:text-[#C19A6B] transition-all duration-300"> journalism group</a>.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-3xl">
          <a href="/brewing" className="px-6 py-3 w-60 text-center rounded-xl bg-[#E2A96D] text-white font-semibold text-lg hover:bg-[#661c00] transition-all shadow-lg">Brewing</a>
          <a href="/museum" className="px-6 py-3 w-60 text-center rounded-xl bg-[#E2A96D] text-white font-semibold text-lg hover:bg-[#661c00] transition-all shadow-lg">Museum Exhibit</a>
          <a href="/gallery" className="px-6 py-3 w-60 text-center rounded-xl bg-[#E2A96D] text-white font-semibold text-lg hover:bg-[#661c00] transition-all shadow-lg">Image Gallery</a>
          <a href="/trace-residue" className="px-6 py-3 w-60 text-center rounded-xl bg-[#E2A96D] text-white font-semibold text-lg hover:bg-[#661c00] transition-all shadow-lg">Trace Residue</a>
          <a href="/journalism" className="px-6 py-3 w-60 text-center rounded-xl bg-[#E2A96D] text-white font-semibold text-lg hover:bg-[#661c00] transition-all shadow-lg">Brewing Event</a>
          <a href="/cooking_event" className="px-6 py-3 w-60 text-center rounded-xl bg-[#E2A96D] text-white font-semibold text-lg hover:bg-[#661c00] transition-all shadow-lg">Cooking Event</a>
        </div>
      </div>
    </div>
  );
}
