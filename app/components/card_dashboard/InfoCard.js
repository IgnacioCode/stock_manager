import React from 'react';

export function InfoCard({ amount1, amount2, text, bg_color }) {
    return (
      <div className={`flex-col p-[0.96vw] w-[14.16vw]`} style={{ backgroundColor: bg_color }}>
        <p className="text-[1.3vw] mb-4">$ {amount1}</p>
        <p className="text-[1.3vw] mb-4">U$D {amount2}</p>
        <p className="text-[1.3vw]">{text}</p>
      </div>
    );
  }