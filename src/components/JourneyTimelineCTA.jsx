import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const steps = [
  'Discover Your Path',
  'Build Your Skills',
  'Connect with Mentors',
  'Apply with Confidence',
  'Track Growth with AI',
];

export default function JourneyTimelineCTA() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#090909] py-24 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(78,208,255,0.18),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">Your Career Journey</h2>
          <p className="mt-4 text-white/70">A timeline that lights up as you move forward.</p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-cyan-500/50 via-white/20 to-purple-500/50" />
          <div className="relative grid grid-cols-5 gap-3">
            {steps.map((label, i) => (
              <button
                key={i}
                className="relative z-10 mx-auto grid h-28 w-full place-items-center"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <motion.div
                  className="grid place-items-center"
                  animate={{ scale: active === i ? 1.15 : 1, filter: active === i ? 'drop-shadow(0 0 16px rgba(156,77,255,0.6))' : 'none' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <div
                    className={`h-5 w-5 rounded-full ring-2 ${
                      active === i
                        ? 'bg-gradient-to-br from-cyan-400 to-purple-500 ring-white'
                        : 'bg-white/20 ring-white/40'
                    }`}
                  />
                </motion.div>
                <span className={`mt-3 text-center text-xs sm:text-sm ${active === i ? 'text-white' : 'text-white/70'}`}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold">Your career is a journey. Let it Flow with AI.</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Join Career Flow and move with clarity, mentorship, and real-time insight — from day one to dream role.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(78,208,255,0.35)] transition-transform hover:scale-[1.02]"
            >
              Join Career Flow
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* Demo Anchor */}
        <div id="demo-video" className="sr-only">Demo</div>
      </div>
    </section>
  );
}
