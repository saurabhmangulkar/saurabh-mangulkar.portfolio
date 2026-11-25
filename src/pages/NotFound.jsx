import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiTerminal } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center p-6 font-mono select-none">
      <div className="w-full max-w-md flex flex-col space-y-6">
        
        {/* Terminal Header */}
        <div className="w-full border border-zinc-800 rounded-xl bg-slate-950/80 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 block" />
            </div>
            <span className="text-[10px] text-zinc-500 tracking-wide uppercase font-bold">404_error.log</span>
            <div className="w-12" />
          </div>

          {/* Console Text */}
          <div className="p-6 text-left text-xs text-zinc-300 space-y-4">
            <div className="text-rose-400 font-bold font-mono">
              &gt; HTTP ERROR 404: RESOURCE_NOT_FOUND
            </div>
            <div className="text-zinc-400 leading-relaxed">
              The viewport route you attempted to fetch does not exist on this portfolio compile. Core routes are localized around base parameters.
            </div>
            <div className="text-zinc-500">
              // system logs indicate route state mismatch
            </div>
            <div className="text-zinc-400">
              Please redirect your terminal to safety.
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to="/"
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <FiHome size={14} />
          <span>Return to base (Home)</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
