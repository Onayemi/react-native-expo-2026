import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Keep splash screen visible while app is loading
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const hideSplash = async () => {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      await SplashScreen.hideAsync();
    };

    hideSplash();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <SafeAreaProvider>
          {/* <Stack screenOptions={{ headerShown: false }} /> */}
          {/* <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />

            <Stack.Screen name="(drawer)" />
          </Stack> */}
          <Slot />
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
