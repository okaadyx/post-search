import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchComponentProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchComponent = ({ query, setQuery }: SearchComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Ionicons name="search" size={18} color="gray" />

        <TextInput
          style={styles.input}
          placeholder="Search here"
          placeholderTextColor="gray"
          onChangeText={setQuery}
          value={query}
          returnKeyType="search"
        />
      </View>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "98%",
    padding: 8,
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    borderRadius: 12,
    color: "black",
    backgroundColor: "white",
  },
});
