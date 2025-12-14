"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-gray-300/50 dark:border-gray-800/50">
      <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>© {year} Md Sajadur Rahman. All Rights Reserved.</p>
      </div>
    </footer>
  );
} 