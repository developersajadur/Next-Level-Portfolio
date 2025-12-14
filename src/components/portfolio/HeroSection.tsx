"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import TypewriterRole from "./TypewriterRole";

export default function HeroSection() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center" id="#home">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-80 h-80 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            <Image
              src="https://res.cloudinary.com/devsajadurrahman/image/upload/v1738846791/e1jgd7aaedoef6yvdkkx.jpg"
              alt="Md Sajadur Rahman"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            Md Sajadur Rahman
          </span>
        </motion.h1>

        {/* Role */}
        <TypewriterRole />

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Crafting exceptional digital experiences with clean code and thoughtful design
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {[
          {
    href: "https://github.com/developersajadur",
    icon: "simple-icons:github",
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    href: "https://www.linkedin.com/in/sajadurrahman",
    icon: "skill-icons:linkedin",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  {
    href: "mailto:itzmesojib@gmail.com",
    icon: "material-icon-theme:email",
    label: "Email",
    color: "hover:text-red-500",
  },
  {
    href: "https://wa.me/8801787448412",
    icon: "mdi:whatsapp",
    label: "WhatsApp",
    color: "hover:text-green-600",
  },
  {
    href: "https://discord.gg/developersajadur",
    icon: "ic:baseline-discord",
    label: "Discord",
    color: "hover:text-indigo-500",
  },
  {
    href: "https://web.facebook.com/sajadurrahman.dev",
    icon: "mdi:facebook",
    label: "Facebook",
    color: "hover:text-blue-700",
  },
  {
    href: "https://t.me/developersajadur",
    icon: "mdi:telegram",
    label: "Telegram",
    color: "hover:text-sky-500",
  },
          ].map((link) => (
            <motion.div key={link.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link.href}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-sm transition-all duration-300 border border-gray-300/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl ${link.color}`}
              >
                <Icon icon={link.icon} width={18} height={18} />
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-50/80 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/50 rounded-full backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Link href="#contact">
            <span className="text-green-700 dark:text-green-300 text-sm font-medium">
              Available for projects
            </span>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
