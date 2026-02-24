import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Background gradient instead of image */}
      <div className="absolute inset-0 w-full h-full" style={{ background: "linear-gradient(135deg, #1a2e0d 0%, #2d4a1e 40%, #4a6741 70%, #c4873a 100%)" }} />

      {/* Animated oil drops */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${8 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
              width: 6 + (i % 3) * 8,
              height: 6 + (i % 3) * 8,
              background: `radial-gradient(circle at 35% 35%, rgba(255,220,120,0.8), rgba(196,135,58,0.4), transparent)`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div style={{ y }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-sm font-medium mb-6"
          style={{ color: "#e8d49a" }}
        >
          О нашем производстве
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
        >
          Домашнее производство<br />
          <span style={{ color: "#e8d49a" }}>с любовью к качеству</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Маслик — это небольшое семейное производство, где каждая бутылочка делается с заботой.
          Мы используем исключительно холодный отжим: семена давятся под давлением без нагрева,
          благодаря чему масла сохраняют все полезные свойства, витамины и натуральный вкус в первозданном виде.
        </motion.p>
      </motion.div>
    </div>
  );
}
