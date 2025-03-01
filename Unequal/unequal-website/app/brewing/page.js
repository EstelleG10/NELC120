"use client";
import { useState } from "react";

const brewingSteps = [
    {
        id: 1,
        title: "Selecting Grains",
        image: "/grains.jpg",
        description: "Barley and emmer wheat were the primary grains used in ancient Egyptian and Mesopotamian beer."
    },
    {
        id: 2,
        title: "Malting & Fermentation",
        image: "/fermentation.jpg",
        description: "The grains were soaked in water, left to germinate, and then dried before being ground into flour."
    },
    {
        id: 3,
        title: "Brewing & Storage",
        image: "/brewing-vats.jpg",
        description: "Fermentation took place in large ceramic vats, often with added dates or honey for sweetness."
    }
];

export default function BrewingPage() {
    const [selectedStep, setSelectedStep] = useState(null);

    return (
        <div className="min-h-screen bg-[url('/wood-texture.jpg')] bg-cover bg-fixed text-white px-6 py-16">
            {/* Title */}
            <h1 className="text-5xl font-extrabold text-center drop-shadow-md">Brewing of the Ancient World</h1>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mt-4">
            The brewing group set out on an ambitious task, to brew beer with the same flavors and methods used in the ancient past. 
            </p>

            {/* Brewing Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {brewingSteps.map((step) => (
                    <div
                        key={step.id}
                        className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => setSelectedStep(step)}
                    >
                        <img src={step.image} alt={step.title} className="rounded-lg shadow-md w-full h-48 object-cover" />
                        <h2 className="text-xl font-semibold text-center mt-2">{step.title}</h2>
                    </div>
                ))}
            </div>

            {/* Brewing Step Modal */}
            {selectedStep && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md text-center relative">
                        <button
                            onClick={() => setSelectedStep(null)}
                            className="absolute top-3 right-3 text-2xl font-bold text-gray-400 hover:text-white"
                        >
                            ✖
                        </button>
                        <img src={selectedStep.image} alt={selectedStep.title} className="rounded-lg shadow-md w-full h-56 object-cover" />
                        <h2 className="text-2xl font-bold mt-4">{selectedStep.title}</h2>
                        <p className="text-gray-300 mt-2">{selectedStep.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
