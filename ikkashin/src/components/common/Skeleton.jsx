import React from 'react';

export default function Skeleton({ className = '', height = 'h-4', width = 'w-full' }) {
  return (
    <div
      className={`animate-pulse bg-slate-200 rounded-md ${height} ${width} ${className}`}
    />
  );
}
