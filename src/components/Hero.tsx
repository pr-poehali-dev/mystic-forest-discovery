import { useScroll, useTransform, motion, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const SEEDS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 4 + Math.random() * 10,
  duration: 6 + Math.random() * 10,
  delay: Math.random() * 5,
  opacity: 0.15 + Math.random() * 0.35,
  rotate: Math.random() * 360,
}));

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleScrollToOils = () => {
    const el = document.getElementById("oils");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ background: "linear-gradient(160deg, #2d4a1e 0%, #4a6741 30%, #7a8c3a 60%, #c4a84a 100%)" }}
    >
      {/* Animated seeds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {SEEDS.map((seed) => (
          <motion.div
            key={seed.id}
            className="absolute rounded-full"
            style={{
              left: `${seed.x}%`,
              top: `${seed.y}%`,
              width: seed.size,
              height: seed.size * 2.2,
              background: `radial-gradient(ellipse at 40% 30%, #f5e6a3, #c8a94a, #7a6020)`,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              opacity: seed.opacity,
              rotate: seed.rotate,
            }}
            animate={{
              y: [0, -18, 0, 10, 0],
              x: [0, 6, -4, 8, 0],
              rotate: [seed.rotate, seed.rotate + 20, seed.rotate - 10, seed.rotate + 30, seed.rotate],
              opacity: [seed.opacity, seed.opacity * 1.5, seed.opacity, seed.opacity * 0.7, seed.opacity],
            }}
            transition={{
              duration: seed.duration,
              delay: seed.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Parallax overlay */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="w-full h-full" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(30,40,15,0.5) 100%)" }} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-[#d4c08a] uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium">
            Масла холодного отжима
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white leading-[0.95]">
            Маслик —<br />
            <span style={{ color: "#e8d49a" }}>природа</span><br />
            в каждой капле
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto opacity-80 text-[#e8e0c8] mb-10 leading-relaxed">
            13 видов масел холодного отжима.<br />Натурально и полезно.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleScrollToOils}
            className="px-10 py-4 text-sm uppercase tracking-widest font-semibold rounded-full transition-all duration-300 cursor-pointer"
            style={{ background: "#c4873a", color: "#fff", border: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d4984a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#c4873a")}
          >
            Смотреть масла
          </motion.button>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
