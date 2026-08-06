import { GlassView } from "expo-glass-effect";
import type { ReactNode } from "react";

type GlassCircleButtonProps = {
  size: number;
  children: ReactNode;
};

export function GlassCircleButton({ size, children }: GlassCircleButtonProps) {
  return (
    <GlassView
      glassEffectStyle="regular"
      colorScheme="dark"
      isInteractive
      style={{ width: size, height: size }}
      className="items-center justify-center overflow-hidden rounded-full border border-white/10"
    >
      {children}
    </GlassView>
  );
}
