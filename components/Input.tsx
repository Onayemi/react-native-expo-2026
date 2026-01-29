// components/AppTextInput.tsx
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

type AppTextInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secure?: boolean; // toggle password
  style?: object;
};

export default function AppTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  secure = false,
  style,
}: AppTextInputProps) {
  const [secureText, setSecureText] = useState(secure);

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      mode="outlined"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureText}
      style={[styles.input, style]}
      right={
        secure ? (
          <TextInput.Icon
            icon={secureText ? "eye-off" : "eye"}
            onPress={() => setSecureText(!secureText)}
          />
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  input: { marginVertical: 8 },
});
