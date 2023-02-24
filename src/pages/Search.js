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

      {status === "error" && error ? (
        <>
          <Text style={styles.centerText}>Something went wrong 🥲</Text>
          <Text style={styles.centerText}>{error.toString()}</Text>
          <Text style={styles.centerText}>
            Please try again later or contact support.
          </Text>
        </>
      ) : null}

      {status === "loading" ? (
        <Text style={styles.centerText}>Searching... 🔎</Text>
      ) : null}

      {status === "idle" && data?.articles?.length > 0 ? (
        <>
          <Text style={styles.centerText}>{`Displaying ${Number(
            data.totalResults
          ).toLocaleString("en-US")} results`}</Text>
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
