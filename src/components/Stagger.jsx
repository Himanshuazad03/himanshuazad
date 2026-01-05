"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function StaggerContainer({
  children,
  className = "",
  animateOnView = true,
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate={!animateOnView ? "show" : undefined}
      whileInView={animateOnView ? "show" : undefined}
      viewport={animateOnView ? { once: true, margin: "-80px" } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }) {
  return <motion.div variants={item}>{children}</motion.div>;
}
