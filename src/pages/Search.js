import { View } from "react-native";
import { SearchBar } from "../components/Searchbar";

export const SearchPage = () => {
  return (
    <View>
      <SearchBar
        placeholder="Search local news..."
        onChangeText={console.log}
      />
    </View>
  );
};
