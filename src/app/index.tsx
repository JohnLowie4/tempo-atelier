import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Card } from "@/component/card";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1 bg-background px-4 pb-4 pt-4">
        <Card />
      </SafeAreaView>
    </View>
  );
}
