// components/AppDropdown.tsx
import React, { useState } from "react";
import { Dropdown } from "react-native-paper-dropdown";

type AppDropdownProps = {
  label: string;
  value: string;
  setValue: (val: string) => void;
  list?: { label: string; value: string }[];
  disabled?: boolean;
};

export default function AppDropdown({
  label,
  value,
  setValue,
  list = [],
  disabled = false,
}: AppDropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Dropdown
      label={label}
      mode="outlined"
      value={value ?? ""}
      onSelect={setValue}
      options={list}
      visible={showDropdown}
      showDropDown={() => setShowDropdown(true)}
      onDismiss={() => setShowDropdown(false)}
      disabled={disabled}
      style={{ marginVertical: 8 }}
    />
  );
}
