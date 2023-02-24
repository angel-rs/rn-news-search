import { FlatList } from "react-native";
import { ArticleItem } from "./ArticleItem";

// TODO: use flash-list (performance)
export function ArticlesList({ data }) {
  const renderItem = ({ item }) => <ArticleItem key={item.url} item={item} />;
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.url}
    />
  );
}
