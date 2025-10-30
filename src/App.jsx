import React from 'react';
import Hero3DSection from './components/Hero3DSection';
import FlowConceptSection from './components/FlowConceptSection';
import FeaturesCards from './components/FeaturesCards';
import JourneyTimelineCTA from './components/JourneyTimelineCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Hero3DSection />
      <FlowConceptSection />
      <div id="features">
        <FeaturesCards />
      </div>
      <JourneyTimelineCTA />
      <footer className="relative bg-[#0B0B0B] py-12 text-white/70">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(156,77,255,0.18),transparent)]" aria-hidden />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm">© 2025 Career Flow | Designed for limitless growth.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-md hover:bg-white/10">LinkedIn</a>
            <a href="#" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-md hover:bg-white/10">GitHub</a>
            <a href="#" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-md hover:bg-white/10">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
