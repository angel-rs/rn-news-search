import { View, Text, StyleSheet, Linking } from "react-native";

import { ArticlesList } from "../components/ArticlesList";
import { SearchBar } from "../components/Searchbar";
import { useArticlesSearch } from "../hooks/useArticlesSearch";

export const SearchPage = () => {
  const { status, data, error, onSearch } = useArticlesSearch();

  const onPressArticle = (item) => {
    Linking.openURL(item.url);
  };

  return (
    <View>
      <SearchBar placeholder="Search local news..." onChangeText={onSearch} />

      {status === "error" ? (
        <>
          <Text>Something wen't wrong 🥲</Text>
          <Text>{error.message}</Text>
        </>
      ) : null}

      {status === "loading" ? (
        <Text style={styles.centerText}>Searching... 🔎</Text>
      ) : null}

      {status === "idle" && data ? (
        <>
          <Text
            style={styles.centerText}
          >{`Displaying ${data.totalResults} results`}</Text>
          <ArticlesList
            articles={data.articles}
            onPressArticle={onPressArticle}
          />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    textAlign: "center",
  },
});
