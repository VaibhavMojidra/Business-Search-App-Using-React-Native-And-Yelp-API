import React from "react";
import { View, Text } from "react-native";
import GlobalStyle, { Colors } from "../../assets/css/GlobalStyle";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ data }) => {
  return (
    <View style={GlobalStyle.searchBarStyle}>
      <Ionicons
        name="search"
        size={24}
        color="#000"
        style={GlobalStyle.searchBarIcon}
      />
      <TextInput
        placeholder="Search"
        style={GlobalStyle.searchInputStyle}
        autoCorrect={false}
        value={data.searchTerm}
        onChangeText={(newString) => data.onTermChange(newString)}
        onEndEditing={()=>data.onTermSubmit()}
      />
    </View>
  );
};

export default SearchBar;
