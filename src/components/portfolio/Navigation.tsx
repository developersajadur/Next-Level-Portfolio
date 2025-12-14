"use client";

import Image from "next/image";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_ITEMS = ["Overview", "Stack", "Experience", "Projects", "Contact"];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 md:top-4 w-full z-50 px-4">
      <div className="mx-auto max-w-6xl md:max-w-fit md:border md:rounded-full bg-zinc-200/60 dark:bg-slate-900/60 backdrop-blur-3xl px-4 py-2">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="#home" className="">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Image src="/logo.svg" alt="Logo" width={36} height={36} priority />
          </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}

            {/* Theme Toggle (Desktop) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-bold" width={18} className="text-yellow-500" />
              ) : (
                <Icon icon="solar:moon-bold" width={18} className="text-blue-500" />
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">

            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-bold" width={18} className="text-yellow-500" />
              ) : (
                <Icon icon="solar:moon-bold" width={18} className="text-blue-500" />
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800"
            >
              <Icon
                icon={open ? "mdi:close" : "mdi:menu"}
                width={22}
                className="text-gray-800 dark:text-gray-200"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 mx-4 rounded-2xl bg-zinc-200/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-300 dark:border-gray-700"
          >
            <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-700">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-800 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
