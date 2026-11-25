import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Check if the user is on a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setHidden(false);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Attach to links, buttons, and input elements for scaling effect
    const addHoverListeners = () => {
      const interactables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], [data-interactable]');
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Observe DOM changes to attach event listeners to dynamic components (like search results)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  // Animate the outer cursor trailing behind the main cursor
  useEffect(() => {
    let animationFrameId;
    
    const updateTrailing = () => {
      setTrailingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Adjust this factor to change lag speed (e.g. 0.1 for slow, 0.2 for fast)
        const lagFactor = 0.15;
        return {
          x: prev.x + dx * lagFactor,
          y: prev.y + dy * lagFactor,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out mix-blend-difference ${
          clicked ? 'scale-75 bg-blue-500/20' : ''
        } ${linkHovered ? 'scale-150 border-cyan-400 bg-cyan-400/10' : ''}`}
        style={{
          left: `${trailingPosition.x}px`,
          top: `${trailingPosition.y}px`,
        }}
      />
      {/* Inner Dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-difference ${
          clicked ? 'scale-50' : ''
        } ${linkHovered ? 'scale-0' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
