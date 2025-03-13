"use client";
import { useState } from "react";


const brewingSteps = [
    {
        id: 1,
        title: "Selecting Grains",
        image: "/holder.jpeg",
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
        title: "Brewers",
        image: "/brewers.jpeg",
        description: "Fermentation took place in large ceramic vats, often with added dates or honey for sweetness."
    },
    {
        id: 4,
        title: "Beer at Ancient Cooking Event",
        image: "/SPIKE.jpeg",
        description: "Barley and emmer wheat were the primary grains used in ancient Egyptian and Mesopotamian beer."
    }
];

export default function BrewingPage() {
    const [selectedStep, setSelectedStep] = useState(null);

    return (
        
        <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
            <h1 className="text-5xl font-extrabold text-center">Brewing of the Ancient World</h1>

            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mt-4">
                The brewing group set out on the ambitious task of brewing beer with the same flavors and methods used in the ancient past. 
                With the help of two postdoctoral researchers from the Molecular Biophysics and Biochemistry Department—Vanessa Todorow (biochemist) 
                and Zane Johnson (molecular biologist)—the brewing group created beer based on ancient recipes. The experts described the process of 
                brewing as "an exact science" and guided the students through the steps involved.
            </p>

            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mt-4">
                First, they took the barley and emmer wheat and filled the brewing pot, which had holes throughout and was designed based
                on the remains of ancient brewing vessels. As 150-degree water washed through the vessel, they hoped the beta and alpha
                amylase enzymes would activate and produce the desired sugars to give the beer its sweetness.
            </p>

            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mt-4">
                Following this, a starch test was conducted to determine whether all the sugars and starch had been successfully extracted
                from the grain, ensuring the water had absorbed the desired flavors. However, the brewing team encountered an unexpected
                challenge—the starch test quickly came back negative, indicating that all the starches and sugars had been washed away much
                faster than expected. The team had to problem-solve to understand the anomaly and adjust their approach.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {brewingSteps.map((step) => (
                    <div
                        key={step.id}
                        className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => setSelectedStep(step)}
                    >
                        <img src={step.image} alt={step.title} className="rounded-lg shadow-md w-full h-80 object-cover" />
                        <h2 className="text-xl font-semibold text-center mt-2">{step.title}</h2>
                    </div>
                ))}
            </div>

            {selectedStep && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md text-center relative">
                        <button
                            onClick={() => setSelectedStep(null)}
                            className="absolute top-3 right-3 text-2xl font-bold text-gray-400 hover:text-white"
                        >
                            ✖
                        </button>
                        <img src={selectedStep.image} alt={selectedStep.title} className="rounded-lg shadow-md w-full h-96 object-cover" />
                        <h2 className="text-2xl font-bold mt-4">{selectedStep.title}</h2>
                        <p className="text-gray-300 mt-2">{selectedStep.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
