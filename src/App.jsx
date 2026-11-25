import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // 1. Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (!isLoaderComplete) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoaderComplete]);

  // 2. Setup hotkey listener for Command Palette (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen text-zinc-100 bg-[#030712] font-sans selection:bg-blue-600/30 selection:text-blue-200">
        
        {/* Preloader */}
        <AnimatePresence mode="wait">
          {!isLoaderComplete && (
            <Preloader onComplete={() => setIsLoaderComplete(true)} />
          )}
        </AnimatePresence>

        {isLoaderComplete && (
          <div className="animate-in fade-in duration-700">
            {/* Custom Interactive Cursor */}
            <CustomCursor />

            {/* Global Sticky Header */}
            <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

            {/* Global Command Palette Overlay */}
            <CommandPalette 
              isOpen={isCommandPaletteOpen} 
              onClose={() => setIsCommandPaletteOpen(false)} 
            />

            {/* Viewports */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
