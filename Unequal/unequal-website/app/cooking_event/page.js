"use client";
import { useState } from "react";

export default function CookingEventPage() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-8 pb-16 font-serif">
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

            {/* Title & Event Date */}
            <div className="text-center">
                <h1 className="text-7xl font-extrabold drop-shadow-md">Feasting Like the Ancients:</h1>
                     <h2 className="text-3xl font-extrabold drop-shadow-md">A Culinary and Archaeological Experiment</h2>
                <p className="text-lg text-orange-600 mt-2">Exploring ancient recipes and brewing techniques.</p>
                <p className="text-md text-grey-300 font-semibold mt-1">February 18th, 2025</p>
            </div>

            {/* Event Poster */}
            <div className="mt-8 flex justify-center">
                <img src="/POSTER_EVENT.png" alt="Event Poster" className="w-96 h-100 max-w-3xl rounded-lg shadow-lg" />
            </div>

            {/* Event Overview */}
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Event Overview</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    <br /><br />
                    On Tuesday, February 18th, people gathered to enjoy a dinner of Babylonian cuisine ... CONTINUED
                </p>
            </div>

            {/* Expandable Sections */}
            <div className="mt-10 space-y-6">
                {[
                    { title: "Ingredients & Tools", content: "[List ingredients, tools, and preparation materials.]" },
                    { title: "Preparation Process", content: "[Describe how ingredients were prepared.]" },
                    { title: "Cooking & Techniques", content: "[Step-by-step details of the cooking process.]" },
                    { title: "Cultural & Historical Context", content: "[Explain how this meal was important in history.]" },
                    { title: "Reflections & Observations", content: "[Share learnings, taste comparisons, and thoughts.]" },
                ].map((section, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg">
                        <button
                            onClick={() => toggleSection(section.title)}
                            className="w-full text-left text-xl font-bold text-orange-600 flex justify-between items-center"
                        >
                            {section.title}
                            <span className="text-2xl">{expandedSection === section.title ? "−" : "+"}</span>
                        </button>
                        {expandedSection === section.title && (
                            <p className="mt-3 text-lg text-gray-300">{section.content}</p>
                        )}
                    </div>
                ))}
            </div>

            {/* Video Section */}
            <div className="mt-10 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-orange-600">Event Video</h2>
                <p className="text-lg text-gray-300 mt-2">Watch highlights from the event.</p>

                <div className="mt-4 flex justify-center">
                    <video className="rounded-lg shadow-lg w-full max-w-3xl" controls poster="/class.JPG">
                        <source src="/event-video.mp4" type="video/mp4" />
                        <source src="/NELC 120 2.18.25 Ancient Recipes - SD 480p.mov" type="video/webm" />
                        <p className="text-gray-400">Your browser does not support the video tag.</p>
                    </video>
                </div>
            </div>

            {/* Event Gallery */}
            <div className="mt-10 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-orange-600">Event Gallery</h2>
                <p className="text-lg text-gray-300 mt-2">Upload or view images from the event.</p>
                <div className="mt-4 flex space-x-4">
                    <img src="/example1.jpg" alt="Example" className="w-40 h-40 rounded-lg object-cover" />
                    <img src="/example2.jpg" alt="Example" className="w-40 h-40 rounded-lg object-cover" />
                </div>
            </div>
        </div>
    );
}
