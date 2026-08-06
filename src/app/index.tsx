import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex-1 items-center justify-center bg-background">
        <Text className="font-sans-semibold text-[32px] text-text-primary">Tempo Atelier</Text>
        <Text className="font-sans-semibold text-[16px] text-text-primary">
          Primary Font: Space Grotesk
        </Text>
      </SafeAreaView>
    </View>
  );
}
