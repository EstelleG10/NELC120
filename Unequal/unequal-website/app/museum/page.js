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
            <div className="min-h-screen bg-black text-white px-8 py-16">
                {/* Title & Event Date */}
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold drop-shadow-md">The Museum Group</h1>
                    <p className="text-lg text-orange-600 mt-2">Exploring curation of ancient objects at the Peabody Museum.</p>
                </div>

                {/* Event Poster */}
                <div className="mt-8 flex justify-center">
                    <img src="/museum_graphic.png" alt="Event Poster" className="w-96 h-100 max-w-3xl rounded-lg shadow-lg" />
                </div>

                {/* Event Overview */}
                <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                    <h2 className="text-3xl font-bold text-orange-600">The Process Described </h2>
                    <p className="mt-2 text-lg leading-relaxed">
                        <br /><br />
                        On Tuesday, February 18th, people gathered to enjoy a dinner of Babylonian cuisine ... CONTINUED
                    </p>
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
        </div>
    );
}
