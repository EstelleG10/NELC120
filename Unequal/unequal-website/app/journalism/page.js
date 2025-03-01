export default function JournalismPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h1 className="text-5xl font-bold mb-6">Journalism Group</h1>
        <p className="text-lg max-w-3xl text-center text-gray-300">
          Welcome to the Journalism Group! We are dedicated to documenting and sharing the insights from our interactive course, UNEQUAL. 
          Through articles, interviews, and multimedia content, we explore power, inequality, and ancient societies.
        </p>
        
        <div className="mt-8 grid grid-cols-2 gap-6">
          <a href="/articles" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-400 transition-all shadow-lg">
            Read Articles
          </a>
          <a href="/interviews" className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-lg hover:bg-green-400 transition-all shadow-lg">
            Watch Interviews
          </a>
        </div>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a href="/team" className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold text-lg hover:bg-purple-400 transition-all shadow-lg">
            Meet the Team
          </a>
          <a href="/contact" className="px-6 py-3 rounded-xl bg-yellow-600 text-white font-semibold text-lg hover:bg-yellow-400 transition-all shadow-lg">
            Contact Us
          </a>
        </div>
      </div>
    );
  }
  