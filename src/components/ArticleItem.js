import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Col } from "./Col";
import { Row } from "./Row";

export function ArticleItem({ item, onPress }) {
  console.log(item);
  return (
    <Row style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Row>
          <Image style={styles.img} source={{ uri: item.urlToImage }} />

          <Col>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </Col>
        </Row>
      </TouchableOpacity>
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
