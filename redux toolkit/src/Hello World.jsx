import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HelloWorld = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 overflow-hidden">
      {/* Dynamic background */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,0,255,0.3), transparent 80%)`,
        }}
      />

      {/* Floating elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.1, 0.7],
          }}
          transition={{ duration: 10 + Math.random() * 20, repeat: Infinity }}
        />
      ))}

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <span className="flex items-center space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-600 -rotate-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <span className="pr-6 text-gray-100">مرحبًا بك في</span>
              </span>
              <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                عالمنا الإبداعي
              </span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="text-7xl sm:text-9xl font-extrabold text-center mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 filter drop-shadow-lg">
            Hello World
          </span>
        </motion.h1>

        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
          className="text-xl text-gray-300 text-center max-w-2xl"
        >
          اكتشف عالمًا من الإبداع والابتكار. نحن هنا لنلهمك ونساعدك على تحقيق
          أحلامك في عالم التكنولوجيا.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          ابدأ رحلتك
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
    </div>
  );
};

export default HelloWorld;
