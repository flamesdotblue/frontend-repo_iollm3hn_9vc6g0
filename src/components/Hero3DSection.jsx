import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Play, Rocket, ArrowDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const splitText = (text) => text.split('').map((ch, i) => (
  <motion.span
    key={i}
    initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ delay: i * 0.03, duration: 0.5, ease: 'easeOut' }}
    className="inline-block"
  >
    {ch === ' ' ? '\u00A0' : ch}
  </motion.span>
));

export default function Hero3DSection() {
  const headline = useMemo(() => splitText('Find Your Perfect Career Flow.'), []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#0C0C0C] text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute -left-20 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(78,208,255,0.35),_transparent_60%)] blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(156,77,255,0.35),_transparent_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(78,208,255,0.8)]" />
          <span className="text-xs tracking-wide text-white/80">AI-powered ecosystem for careers</span>
        </motion.div>

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold md:text-6xl leading-tight">
          <span className="bg-gradient-to-br from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">
            {headline}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base text-white/70 md:text-lg"
        >
          Empowered by AI. Designed for your success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#flow"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(78,208,255,0.35)] transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
          >
            <Rocket className="h-4 w-4" />
            <span>Start Your Journey</span>
            <span className="absolute inset-0 -z-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" aria-hidden />
          </a>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10"
            onClick={() => {
              const el = document.getElementById('demo-video');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            <div className="relative grid h-6 w-6 place-items-center rounded-full bg-white/10">
              <Play className="h-3.5 w-3.5" />
              <span className="absolute inset-0 rounded-full ring-1 ring-white/20 animate-ping" aria-hidden />
            </div>
            Watch Demo
          </button>
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 text-white/60">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="text-xs">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
