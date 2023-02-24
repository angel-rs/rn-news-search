import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Col } from "./Col";

export function ArticleItem({ item, onPress }) {
  return (
    <Col style={styles.divider}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.img} source={{ uri: item.urlToImage }} />

        <Col style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text
            numberOfLines={3}
            ellipsizeMode="ellipsis"
            style={styles.description}
          >
            {item.description}
          </Text>
        </Col>
      </TouchableOpacity>
    </Col>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  divider: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  contentContainer: {
    flexShrink: 1,
    flexWrap: "wrap",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    flex: 1,
    width: "100%",
    flexWrap: "wrap",
  },
});
