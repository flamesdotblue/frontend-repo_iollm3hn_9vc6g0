import React from 'react';
import { motion } from 'framer-motion';
import { Brain, LineChart, Users, Shield } from 'lucide-react';

const features = [
  {
    title: 'AI Career Predictor',
    desc: 'Forecast roles that fit your strengths and market momentum.',
    Icon: Brain,
  },
  {
    title: 'Real-time Market Trends',
    desc: 'Track roles, salaries, and demand across industries.',
    Icon: LineChart,
  },
  {
    title: 'Mentorship Connect',
    desc: 'Meet experts who accelerate your journey with guidance.',
    Icon: Users,
  },
  {
    title: 'Secure & Private',
    desc: 'Your data is encrypted and controlled by you.',
    Icon: Shield,
  },
];

function FeatureCard({ title, desc, Icon }) {
  const onMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
      style={{
        background:
          'radial-gradient(240px 180px at var(--x) var(--y), rgba(78,208,255,0.12), transparent 60%), radial-gradient(200px 140px at calc(var(--x) - 80px) calc(var(--y) + 40px), rgba(156,77,255,0.12), transparent 60%)',
      }}
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300 ring-1 ring-white/15">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.16),_transparent_60%)] blur-2xl" />
      </div>
    </motion.div>
  );
}

export default function FeaturesCards() {
  return (
    <section className="relative bg-[#0A0A0A] py-24">
      {/* Animated wave background */}
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
        <svg className="absolute bottom-0 left-0 h-[120%] w-full" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4ED0FF" />
              <stop offset="100%" stopColor="#9C4DFF" />
            </linearGradient>
          </defs>
          <path fill="none" stroke="url(#wave)" strokeWidth="1">
            <animate attributeName="d" dur="14s" repeatCount="indefinite"
              values="M0,300 C200,260 400,340 600,300 C800,260 1000,340 1200,300 C1300,270 1400,320 1440,300
                      ;M0,300 C200,340 400,260 600,300 C800,340 1000,260 1200,300 C1300,330 1400,280 1440,300
                      ;M0,300 C200,260 400,340 600,300 C800,260 1000,340 1200,300 C1300,270 1400,320 1440,300" />
          </path>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Capabilities that feel like magic
          </h2>
          <p className="mt-4 text-white/70">
            Intelligent tools crafted to accelerate your growth at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
