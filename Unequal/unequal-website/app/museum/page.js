"use client";
import { useState } from "react";

const artifacts = [
  { 
    id: 1, 
    name: "Golden Death Mask of Pharaoh", 
    image: "/golden-mask.jpg", 
    description: "A stunning funerary mask used in royal burials, showcasing elite craftsmanship and power." 
  },
  { 
    id: 2, 
    name: "Cuneiform Tablet", 
    image: "/cuneiform-tablet.jpg", 
    description: "A Mesopotamian tablet detailing a transaction. One of the earliest forms of written communication." 
  },
  { 
    id: 3, 
    name: "Assyrian Relief", 
    image: "/assyrian-relief.jpg", 
    description: "A carved stone panel depicting a military conquest, symbolizing imperial dominance and social hierarchy." 
  }
];

export default function MuseumPage() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  return (
    <div className="min-h-screen bg-[url('/parchment.jpg')] bg-cover bg-fixed text-white px-6 py-16">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center drop-shadow-md">Museum Exhibit</h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mt-4">
        Explore artifacts that reveal the power, inequality, and culture of ancient societies.
      </p>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {artifacts.map((artifact) => (
          <div
            key={artifact.id}
            className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setSelectedArtifact(artifact)}
          >
            <img src={artifact.image} alt={artifact.name} className="rounded-lg shadow-md w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold text-center mt-2">{artifact.name}</h2>
          </div>
        ))}
      </div>

      {/* Artifact Modal */}
      {selectedArtifact && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md text-center relative">
            <button
              onClick={() => setSelectedArtifact(null)}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <img src={selectedArtifact.image} alt={selectedArtifact.name} className="rounded-lg shadow-md w-full h-56 object-cover" />
            <h2 className="text-2xl font-bold mt-4">{selectedArtifact.name}</h2>
            <p className="text-gray-300 mt-2">{selectedArtifact.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
