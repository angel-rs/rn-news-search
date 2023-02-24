import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export const SearchBar = ({ placeholder, onChangeText }) => {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
    onChangeText(newText);
  };

  return (
    <TextInput
      style={styles.searchBar}
      placeholder={placeholder}
      value={text}
      onChangeText={handleTextChange}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});
