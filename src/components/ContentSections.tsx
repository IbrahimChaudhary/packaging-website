import { motion } from "framer-motion";
import {
  ShoppingCart,
  UploadCloud,
  BadgeCheck,
  Boxes,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  { step: "01", title: "Place Your Order", description: "Choose your box style, size & quantity", icon: ShoppingCart },
  { step: "02", title: "Share Your Design", description: "Upload your artwork or let us design", icon: UploadCloud },
  { step: "03", title: "Approve the Mockup", description: "Review and approve your 3D proof", icon: BadgeCheck },
  { step: "04", title: "Start Production", description: "We print & craft your custom boxes", icon: Boxes },
  { step: "05", title: "On-Time Delivery", description: "Fast, free shipping to your door", icon: Truck },
];

const ContentSections = () => (
  <section className="py-20 bg-[#fbf3de] overflow-hidden">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-[#1f2d24] ">
          Your packaging in{" "}
          <span className="italic text-[#32936F]">5 simple steps</span>
        </h2>
        <p className="mt-4 text-[#5c5c52] text-base md:text-lg">
          From first click to doorstep delivery — one smooth, transparent process.
        </p>
      </motion.div>

      {/* Desktop */}
      <div className="hidden md:flex items-start justify-between relative">
        {/* Connector line */}
        <div className="absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed border-[#d8cfa8]" />

        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              className="flex flex-col items-center text-center w-36 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-[#32936F] text-white flex items-center justify-center mb-5 shadow-md relative"
                whileHover={{ scale: 1.12, rotate: 5, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon className="w-9 h-9" strokeWidth={1.8} />
                <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#FFC107] text-[#1f2d24] text-xs font-black flex items-center justify-center shadow-sm">
                  {s.step}
                </span>
              </motion.div>
              <h3 className="font-sans text-lg text-[#1f2d24] leading-tight mb-1">
                {s.title}
              </h3>
              <p className="text-xs text-[#5c5c52] leading-snug">
                {s.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-1">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-[#32936F] text-white flex items-center justify-center relative shadow-md">
                  <Icon className="w-7 h-7" strokeWidth={1.8} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#FFC107] text-[#1f2d24] text-[10px] font-black flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-10 border-l-2 border-dashed border-[#d8cfa8] mt-1" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="font-sans text-base text-[#1f2d24]">{s.title}</h3>
                <p className="text-xs text-[#5c5c52]">{s.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="flex justify-center mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button className="inline-flex items-center gap-2 bg-[#32936F] hover:bg-[#2a7d59] text-white font-bold text-sm px-7 py-4 rounded-full transition-colors">
          Start your order
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  </section>
);

export default ContentSections;