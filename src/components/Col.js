import { View, StyleSheet } from "react-native";

export function Col({ children, style }) {
  return <View style={[styles.col, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  col: {
    flexDirection: "column",
  },
});
