import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Panel = ({ title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_80px_at_20%_20%,rgba(78,208,255,0.15),transparent),radial-gradient(120px_80px_at_80%_80%,rgba(156,77,255,0.15),transparent)]" aria-hidden />
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </motion.div>
);

export default function FlowConceptSection() {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(containerRef, { amount: 0.3, once: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <section id="flow" className="relative bg-[#070707] py-24 text-white">
      {/* Holographic thread network (decorative) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4ED0FF" />
              <stop offset="100%" stopColor="#9C4DFF" />
            </linearGradient>
          </defs>
          {[...Array(14)].map((_, i) => (
            <path
              key={i}
              d={`M ${-100 + i * 120} ${50 + (i % 3) * 30} C ${200 + i * 60} ${120 + (i % 5) * 40}, ${300 + i * 60} ${220 + (i % 7) * 30}, ${800 + i * 80} ${400}`}
              stroke="url(#g1)"
              strokeWidth="0.6"
              fill="none"
              className="[filter:drop-shadow(0_0_6px_rgba(156,77,255,0.35))]"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={{ hidden: {}, visible: {} }}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-balance text-3xl font-semibold md:text-5xl"
            >
              The Flow of Growth
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 max-w-xl text-white/70"
            >
              A holographic ecosystem where learning, mentorship, and opportunity connect. Glide through a living map of skills and roles — guided by intelligent analytics and your personal ambition.
            </motion.p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Panel title="Personalized AI Insights" desc="Your profile turns into actionable insights that evolve with you." />
              <Panel title="Skill Gap Detection" desc="Know exactly what to learn next to unlock your next milestone." delay={0.05} />
              <Panel title="Predictive Analytics" desc="Anticipate market shifts and move ahead with confidence." delay={0.1} />
              <Panel title="Mentorship Threads" desc="Connect with the right people at the right time." delay={0.15} />
            </div>
          </div>

          {/* Interactive "ecosystem" spheres (CSS-based) */}
          <div className="relative h-[28rem] w-full">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl" />
            {[
              { size: 140, x: '15%', y: '18%', glow: '#4ED0FF' },
              { size: 90, x: '65%', y: '12%', glow: '#9C4DFF' },
              { size: 110, x: '70%', y: '60%', glow: '#4ED0FF' },
              { size: 80, x: '30%', y: '65%', glow: '#9C4DFF' },
              { size: 70, x: '45%', y: '38%', glow: '#ffffff' },
            ].map((s, i) => (
              <div
                key={i}
                className="absolute grid place-items-center rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md"
                style={{
                  width: s.size,
                  height: s.size,
                  left: s.x,
                  top: s.y,
                  boxShadow: `0 0 40px ${s.glow}55, inset 0 0 40px ${s.glow}22`,
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-white/80" />
              </div>
            ))}

            {/* connecting threads */}
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="threads" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4ED0FF" />
                  <stop offset="100%" stopColor="#9C4DFF" />
                </linearGradient>
              </defs>
              <path d="M 20% 20% C 45% 35%, 55% 30%, 68% 15%" stroke="url(#threads)" strokeWidth="1.2" fill="none" opacity="0.7" />
              <path d="M 18% 70% C 40% 50%, 50% 45%, 72% 60%" stroke="url(#threads)" strokeWidth="1.2" fill="none" opacity="0.7" />
              <path d="M 45% 38% C 52% 40%, 56% 45%, 68% 62%" stroke="url(#threads)" strokeWidth="1.2" fill="none" opacity="0.7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
