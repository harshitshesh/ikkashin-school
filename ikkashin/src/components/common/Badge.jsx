import React from 'react';

export default function Badge({ children, variant = 'blue', className = '' }) {
  const variants = {
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    amber: "bg-amber-100 text-amber-900 border-amber-300",
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
    red: "bg-red-100 text-red-800 border-red-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200",
    slate: "bg-slate-100 text-slate-700 border-slate-200"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variants[variant] || variants.blue} ${className}`}>
      {children}
    </span>
  );
}
