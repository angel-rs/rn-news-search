import { Text, View, StyleSheet } from "react-native";

export function ArticleItem({ item }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
