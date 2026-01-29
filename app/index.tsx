import { useRootNavigationState, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const [isReady, setIsReady] = useState(false);

  // 1️⃣ Wait for navigation tree to mount
  useEffect(() => {
    if (navigationState?.key) {
      setIsReady(true);
    }
  }, [navigationState?.key]);

  // 2️⃣ Redirect ONLY after ready
  useEffect(() => {
    if (!isReady) return;

    const redirect = async () => {
      const token = null; // get from SecureStore

      router.replace(token ? "/(tabs)" : "/login");
    };

    redirect();
  }, [isReady]);

  return null;
}
