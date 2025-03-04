"use client";
import { useState } from "react";

export default function CookingEventPage() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-[url('/wood-texture.jpg')] bg-cover bg-fixed text-white px-8 py-16">
            {/* Title & Event Date */}
            <div className="text-center">
                <h1 className="text-6xl font-extrabold drop-shadow-md">Feasting Like the Ancients: A Culinary and Archaeological Experiment </h1>
                <p className="text-lg text-gray-300 mt-2">Exploring ancient recipes and brewing techniques.</p>
                <p className="text-md text-[#A67B5B] font-semibold mt-1"> February 18th, 2025</p>
            </div>

            {/* Event Overview */}
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-[#A67B5B]">Event Overview</h2>
                <p className="mt-2 text-lg leading-relaxed">
                Professors Gojko Barjamovic and Vincent Morel have taken an innovative approach to co-teaching Unequal: Dynamics of Power and Social Hierarchy in Ancient Egypt and Mesopotamia, a Yale College Spring 2025 course that blurs the lines between academic theory and hands-on experimental archaeology.  

From the first day of class, the professors made a bold claim: students would not simply study history but experience it firsthand through experimental archaeology, chemistry, residue analysis, museum exhibitions, and journalism. With a four-part suite of assignments covering these diverse fields, the course promised an ambitious—and slightly chaotic—learning experience. 

At the heart of the class lies the exploration of feasting and drinking as fundamental cultural acts. As Barjamovic noted, “Food defines who we are” (Barjamovic, 2019). He elaborated that fFeasting and drinking can not only build community and influence identity, but can also serve as powerful tools for elite inclusion and exclusion, shaping cultural identity, and even fostering a connection to the divine. 

The course structure reflects this philosophy. Twice-weekly lectures explore themes of cultural development, interaction, and transformation across the ancient Near East and Mediterranean. In addition, students engage in weekly hands-on sections, working in specialized teams focused on brewing and trace analysis, ceramic reconstructions, museum exhibition planning, and journalistic documentation.  

Two major public evening events punctuate the semester: the first, a recreation of ancient Mesopotamian recipes sourced from the Yale Babylonian Collection, and the second, an exploration of ancient brewing techniques, including both the science of fermentation and the reconstruction of ceramic storage vessels used for libations in antiquity. 
                </p>
            </div>

            {/* Expandable Sections for Writing More */}
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
                            className="w-full text-left text-xl font-bold text-[#A67B5B] flex justify-between items-center"
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

            {/* Image Upload Section (Optional) */}
            <div className="mt-10 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#A67B5B]">Event Gallery</h2>
                <p className="text-lg text-gray-300 mt-2">Upload or view images from the event.</p>
                <div className="mt-4 flex space-x-4">
                    <img src="/example1.jpg" alt="Example" className="w-40 h-40 rounded-lg object-cover" />
                    <img src="/example2.jpg" alt="Example" className="w-40 h-40 rounded-lg object-cover" />
                </div>
            </div>
        </div>
    );
}
