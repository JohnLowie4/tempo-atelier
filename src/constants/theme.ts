/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import "@/global.css";

import { Platform } from "react-native";

export const Colors = {
  light: {
    // We will focus on dark theme for now
    text: "#000000",
    background: "#ffffff",
    backgroundElement: "#F0F0F3",
    backgroundSelected: "#E0E1E6",
    textSecondary: "#60646C",
  },
  dark: {
    textPrimary: "#f4f4f4",
    textSecondary: "##707070",
    background: "#080808",
    backgroundSecondary: "#121212",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

/** Loaded via expo-font in _layout.tsx — use for inline styles on native */
export const FontFamily = {
  primary: "SpaceGrotesk_400Regular",
  primaryMedium: "SpaceGrotesk_500Medium",
  primarySemibold: "SpaceGrotesk_600SemiBold",
  primaryBold: "SpaceGrotesk_700Bold",
  secondary: "PlayfairDisplay_400Regular",
  secondaryBold: "PlayfairDisplay_700Bold",
} as const;

/** CSS / web font stacks — also exposed as Tailwind `font-sans` and `font-serif` */
export const FontStacks = {
  primary: "'Space Grotesk', system-ui, sans-serif",
  secondary: "'Playfair Display', Georgia, serif",
} as const;

export const Fonts = Platform.select({
  web: {
    primary: FontStacks.primary,
    secondary: FontStacks.secondary,
  },
  default: {
    primary: FontFamily.primary,
    secondary: FontFamily.secondary,
  },
})!;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
