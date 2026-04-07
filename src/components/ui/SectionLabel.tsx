import React from 'react';

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase mb-4 block">
    {children}
  </span>
);
