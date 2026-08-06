import { GlassView } from "expo-glass-effect";
import { Text, View } from "react-native";

import { useApp } from "@/context/app-context";

export function Card() {
  const { bpm, selectedTempo, timeSignature } = useApp();

  return (
    <GlassView
      glassEffectStyle="regular"
      colorScheme="dark"
      className="mx-4 overflow-hidden rounded-3xl border border-white/10 bg-background-secondary/60 px-6 py-8"
    >
      <View className="items-center">
        <Text className="font-sans-bold text-[80px] leading-none text-text-primary">
          {bpm}
        </Text>
        <Text className="mt-1 font-sans-medium text-lg text-text-secondary">
          {selectedTempo}
        </Text>
      </View>

      <View className="mt-8 flex-row justify-center gap-2">
        {Array.from({ length: timeSignature }, (_, index) => (
          <View
            key={index}
            className="h-1.5 w-8 rounded-full bg-text-primary/40"
          />
        ))}
      </View>
    </GlassView>
  );
}
