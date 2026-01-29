// components/AppButton.tsx
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

type AppButtonProps = {
  text: string;
  onPress: () => void;
  mode?: "contained" | "outlined" | "text";
  disabled?: boolean;
  style?: object;
};

export default function AppButton({
  text,
  onPress,
  mode = "contained",
  disabled = false,
  style,
}: AppButtonProps) {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style]}
    >
      {text}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: { marginVertical: 8 },
});
