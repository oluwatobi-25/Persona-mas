import React, { useMemo } from 'react';

const FLOATING_EMOJIS = ['🔔', '🍬', '❄️','🦌', '✨', '🎁'];

export const BackgroundEffects: React.FC = () => {
  const items = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      emoji: FLOATING_EMOJIS[Math.floor(Math.random() * FLOATING_EMOJIS.length)],
      left: `${Math.random() * 110 - 5}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${12 + Math.random() * 18}s`,
      size: `${1.2 + Math.random() * 1.8}rem`,
      opacity: 0.1 + Math.random() * 0.3,
      type: Math.random() > 0.45 ? 'falling' : 'floating'
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Festive Gradient Layer */}
      <div className="absolute inset-0 bg-[#2D0808]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3D0B0B_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#0F3D24_0%,transparent_50%)]" />
      
      {/* Animated Items */}
      {items.map((item) => (
        <div
          key={item.id}
          className={`${item.type}-item absolute select-none pointer-events-none`}
          style={{
            left: item.left,
            top: item.type === 'floating' ? `${Math.random() * 100}%` : '-100px',
            fontSize: item.size,
            opacity: item.opacity,
            '--delay': item.delay,
            '--duration': item.duration,
            filter: item.opacity < 0.15 ? 'blur(2px)' : 'none',
          } as React.CSSProperties}
        >
          {item.emoji}
        </div>
      ))}
      
      {/* Vignette & Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
    </div>
  );
};
