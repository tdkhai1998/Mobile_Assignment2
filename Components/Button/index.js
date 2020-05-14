import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const MyButton = ({
  color,
  text,
  style = {},
  disabled = false,
  onPress = (color) => {},
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        ...styles.button,
        ...style,
        backgroundColor: color,
        opacity: disabled ? 0.5 : 1,
      }}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    marginRight: 10,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
