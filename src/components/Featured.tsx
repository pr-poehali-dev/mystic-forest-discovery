import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const BENEFITS = [
  {
    icon: "Gauge",
    title: "Холодный отжим",
    desc: "Масло получают без нагрева — сохраняется максимум полезных веществ и натуральный аромат.",
  },
  {
    icon: "Leaf",
    title: "Витамины сохранены",
    desc: "Омега-3, омега-6, витамины A, D, E — всё остаётся в масле благодаря бережной технологии.",
  },
  {
    icon: "Droplets",
    title: "Без химии",
    desc: "Никаких растворителей, консервантов и усилителей вкуса. Только чистый природный продукт.",
  },
  {
    icon: "Nut",
    title: "Натуральный вкус",
    desc: "Каждое масло сохраняет подлинный вкус и запах сырья — как будто прямо с поля.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Featured() {
  return (
    <section style={{ background: "#f0ebe0" }} className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.25em] text-sm font-medium mb-3" style={{ color: "#c4873a" }}>
            Почему Маслик
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#2d1a0a" }}>
            Сила природы<br />в каждой бутылке
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BENEFITS.map((b) => (
            <motion.div
              key={b.title}
              variants={cardVariants}
              className="rounded-3xl p-8 flex flex-col gap-4 group"
              style={{
                background: "#faf6ee",
                border: "1px solid rgba(196,135,58,0.15)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(196,135,58,0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #c4873a, #e8a84a)" }}
              >
                <Icon name={b.icon} size={26} className="text-white" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: "#2d1a0a" }}>{b.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7a6050" }}>{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
