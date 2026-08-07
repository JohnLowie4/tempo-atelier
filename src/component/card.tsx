import { GlassView } from "expo-glass-effect";
import { StyleSheet, Text, View } from "react-native";

import { useApp } from "@/context/app-context";

export function Card() {
  const { bpm, selectedTempo, timeSignature } = useApp();

  return (
    <GlassView
      glassEffectStyle={{
        style: "regular",
        animate: true,
        animationDuration: 0.5,
      }}
      colorScheme="dark"
      style={styles.glassView}
    >
      <View className="items-center px-6 pb-6 pt-8">
        <Text className="font-sans-bold text-[80px] leading-none text-text-primary">
          {bpm}
        </Text>
        <Text className="mt-1 font-sans-medium text-lg text-text-secondary">
          {selectedTempo}
        </Text>
      </View>

      <View className="w-full flex-row gap-2 px-6 pb-6">
        {Array.from({ length: timeSignature }, (_, index) => (
          <View
            key={index}
            className="h-1.5 flex-1 rounded-full bg-text-primary/40"
          />
        ))}
      </View>
    </GlassView>
  );
}

const styles = StyleSheet.create({
  glassView: {
    overflow: "hidden",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.1)",
    backgroundColor: "rgba(18, 18, 18, 0.6)",
  },
});