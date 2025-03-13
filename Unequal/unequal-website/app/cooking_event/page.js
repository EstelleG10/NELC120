"use client";
import { useState } from "react";

export default function CookingEventPage() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-black text-white px-8 py-16">
            {/* Title & Event Date */}
            <div className="text-center">
                <h1 className="text-6xl font-extrabold drop-shadow-md">Feasting Like the Ancients: A Culinary and Archaeological Experiment</h1>
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
                    <video className="rounded-lg shadow-lg w-full max-w-3xl" controls poster="/video-thumbnail.jpg">
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
