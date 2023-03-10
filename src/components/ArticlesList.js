import { FlatList } from "react-native";
import { ArticleItem } from "./ArticleItem";

export function ArticlesList({ articles: data, onPressArticle }) {
  const renderItem = ({ item }) => (
    <ArticleItem
      key={item.url}
      item={item}
      onPress={() => onPressArticle(item)}
    />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.url}
    />
  );
}
