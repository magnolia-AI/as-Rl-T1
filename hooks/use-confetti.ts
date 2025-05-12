import { useCallback } from 'react';

// This type definition matches the canvas-confetti API
type ConfettiOptions = {
  particleCount?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  ticks?: number;
  origin?: {
    x?: number;
    y?: number;
  };
  colors?: string[];
  shapes?: string[];
  scalar?: number;
  zIndex?: number;
  disableForReducedMotion?: boolean;
};

export const useConfetti = () => {
  const fireConfetti = useCallback(async (options?: ConfettiOptions) => {
    // Dynamically import the confetti library only when needed
    const confetti = (await import('canvas-confetti')).default;
    
    // Default options for a fun confetti effect
    const defaultOptions: ConfettiOptions = {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
    };
    
    // Merge default options with any custom options
    confetti({
      ...defaultOptions,
      ...options,
    });
  }, []);

  return { fireConfetti };
};
