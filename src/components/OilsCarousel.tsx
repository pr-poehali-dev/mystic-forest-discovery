import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useAnimation } from "framer-motion";
import Icon from "@/components/ui/icon";

const OILS = [
  { id: 1, name: "Подсолнечное", emoji: "🌻", color: "#f5c842", bg: "linear-gradient(145deg, #fff8e1, #ffeaa0, #f5c842)" },
  { id: 2, name: "Льняное", emoji: "💙", color: "#6a9fd8", bg: "linear-gradient(145deg, #e8f4fd, #b3d4f5, #6a9fd8)" },
  { id: 3, name: "Конопляное", emoji: "🌿", color: "#5a8a3a", bg: "linear-gradient(145deg, #e8f5e3, #b8dba8, #5a8a3a)" },
  { id: 4, name: "Расторопши", emoji: "🟣", color: "#8b5a8a", bg: "linear-gradient(145deg, #f5e8f5, #d4b0d4, #8b5a8a)" },
  { id: 5, name: "Тыквенное", emoji: "🎃", color: "#d4621a", bg: "linear-gradient(145deg, #fff0e8, #f5b880, #d4621a)" },
  { id: 6, name: "Чёрного тмина", emoji: "⚫", color: "#2d2d2d", bg: "linear-gradient(145deg, #e8e8e8, #a8a8a8, #2d2d2d)" },
  { id: 7, name: "Рапсовое", emoji: "🌼", color: "#c8b820", bg: "linear-gradient(145deg, #fafde8, #f0e878, #c8b820)" },
  { id: 8, name: "Горчичное", emoji: "🟡", color: "#c8941a", bg: "linear-gradient(145deg, #fff8e8, #f5d880, #c8941a)" },
  { id: 9, name: "Кунжутное", emoji: "🫘", color: "#a87848", bg: "linear-gradient(145deg, #faf0e8, #dbb890, #a87848)" },
  { id: 10, name: "Рыжиковое", emoji: "🟠", color: "#d45820", bg: "linear-gradient(145deg, #fff0e5, #f5a870, #d45820)" },
  { id: 11, name: "Облепиховое", emoji: "🍊", color: "#e87820", bg: "linear-gradient(145deg, #fff5e8, #f5c070, #e87820)" },
  { id: 12, name: "Кокосовое", emoji: "🥥", color: "#8a6a3a", bg: "linear-gradient(145deg, #faf8f0, #e8dcc0, #8a6a3a)" },
  { id: 13, name: "Кедровое", emoji: "🌲", color: "#4a7a4a", bg: "linear-gradient(145deg, #e8f5e8, #a8d0a8, #4a7a4a)" },
];

function OilBottle({ color, bg, emoji }: { color: string; bg: string; emoji: string }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Bottle cap */}
      <div
        className="w-8 h-5 rounded-t-sm mb-0 z-10"
        style={{ background: color, boxShadow: `0 2px 8px ${color}80` }}
      />
      {/* Bottle neck */}
      <div
        className="w-10 h-8 rounded-sm"
        style={{ background: bg, borderTop: `2px solid ${color}` }}
      />
      {/* Bottle body */}
      <div
        className="w-24 h-40 rounded-2xl relative overflow-hidden flex items-center justify-center"
        style={{
          background: bg,
          boxShadow: `0 8px 32px ${color}50, inset 2px 4px 12px rgba(255,255,255,0.4), inset -2px -4px 12px rgba(0,0,0,0.1)`,
          border: `1px solid ${color}40`,
        }}
      >
        {/* Glare */}
        <div
          className="absolute top-4 left-4 w-3 h-12 rounded-full opacity-60"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.9), transparent)" }}
        />
        <div
          className="absolute top-3 left-6 w-1 h-6 rounded-full opacity-40"
          style={{ background: "rgba(255,255,255,0.8)" }}
        />
        {/* Label */}
        <div
          className="w-16 h-20 rounded-lg flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.85)",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
            border: `1px solid ${color}30`,
          }}
        >
          <span className="text-4xl">{emoji}</span>
        </div>
      </div>
      {/* Bottom reflection */}
      <div
        className="w-20 h-3 mt-1 rounded-full opacity-20 blur-sm"
        style={{ background: color }}
      />
    </div>
  );
}

function OilCard({ oil }: { oil: typeof OILS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-64 md:w-72 rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255,252,245,0.9)",
        border: "1px solid rgba(196,135,58,0.2)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-8 flex flex-col items-center">
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <OilBottle color={oil.color} bg={oil.bg} emoji={oil.emoji} />
        </motion.div>

        <h3 className="text-xl font-bold text-center mb-4" style={{ color: "#3a2a1a" }}>
          {oil.name}
        </h3>

        <AnimatePresence>
          {hovered ? (
            <motion.button
              key="quick"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="w-full py-2 px-4 rounded-full text-sm font-medium mb-2"
              style={{ background: "#2d4a1e", color: "#fff" }}
            >
              Быстрый просмотр
            </motion.button>
          ) : null}
        </AnimatePresence>

        <button
          className="w-full py-2.5 px-6 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 border-2"
          style={{
            borderColor: "#c4873a",
            color: "#c4873a",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#c4873a";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#c4873a";
          }}
        >
          Выбрать
        </button>
      </div>
    </motion.div>
  );
}

export default function OilsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 304; // w-72 + gap
  const maxScroll = -(OILS.length * cardWidth - (typeof window !== "undefined" ? window.innerWidth - 80 : 1200));

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, OILS.length - 1));
    setCurrentIndex(clamped);
    const newX = Math.max(maxScroll, -clamped * cardWidth);
    animate(x, newX, { type: "spring", stiffness: 200, damping: 30 });
  };

  return (
    <section id="oils" className="py-24 overflow-hidden" style={{ background: "#faf6ee" }}>
      <div className="px-6 md:px-12 mb-12">
        <p className="uppercase tracking-[0.25em] text-sm font-medium mb-3" style={{ color: "#c4873a" }}>
          Наша коллекция
        </p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#2d1a0a" }}>
          13 масел холодного отжима
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: maxScroll, right: 0 }}
          style={{ x }}
          className="flex gap-6 pl-6 md:pl-12 cursor-grab active:cursor-grabbing"
          whileTap={{ cursor: "grabbing" }}
        >
          {OILS.map((oil) => (
            <OilCard key={oil.id} oil={oil} />
          ))}
          <div className="flex-shrink-0 w-6" />
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 px-6 md:px-12 mt-10">
        <button
          onClick={() => scrollTo(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 disabled:opacity-30"
          style={{ borderColor: "#c4873a", color: "#c4873a" }}
          onMouseEnter={(e) => {
            if (currentIndex > 0) {
              e.currentTarget.style.background = "#c4873a";
              e.currentTarget.style.color = "#fff";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#c4873a";
          }}
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <button
          onClick={() => scrollTo(currentIndex + 1)}
          disabled={currentIndex >= OILS.length - 1}
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 disabled:opacity-30"
          style={{ borderColor: "#c4873a", color: "#c4873a" }}
          onMouseEnter={(e) => {
            if (currentIndex < OILS.length - 1) {
              e.currentTarget.style.background = "#c4873a";
              e.currentTarget.style.color = "#fff";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#c4873a";
          }}
        >
          <Icon name="ChevronRight" size={20} />
        </button>
        <div className="flex gap-2">
          {OILS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === currentIndex ? 24 : 8,
                height: 8,
                background: i === currentIndex ? "#c4873a" : "#e0d0b8",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
