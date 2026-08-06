import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

import { GlassCircleButton } from "@/component/glass-circle-button";
import { useApp } from "@/context/app-context";

const SIDE_BUTTON_SIZE = 64;
const CENTER_BUTTON_SIZE = 80;

export function ControlBar() {
  const { timeSignature } = useApp();

  return (
    <View className="w-full flex-row items-end justify-evenly px-4 pb-2">
      <GlassCircleButton size={SIDE_BUTTON_SIZE}>
        <Text className="font-sans-semibold text-xl text-text-primary">
          {timeSignature}
        </Text>
      </GlassCircleButton>

      <GlassCircleButton size={CENTER_BUTTON_SIZE}>
        <SymbolView
          name={{ ios: "play.fill", android: "play_arrow", web: "play_arrow" }}
          tintColor="#f4f4f4"
          size={28}
        />
      </GlassCircleButton>

      <GlassCircleButton size={SIDE_BUTTON_SIZE}>
        <Text className="font-sans-semibold text-xl text-text-primary">TAP</Text>
      </GlassCircleButton>
    </View>
  );
}
