import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useSearchResults from "../hooks/useSearchResults";
import ResultList from "../components/ResultList";
import GlobalStyle from "../../assets/css/GlobalStyle";

const SearchScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");
  const [SearchApi, results, errorMessage] = useSearchResults();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={GlobalStyle.searchScreenView}>
      <SearchBar
        data={{
          searchTerm: { searchString },
          onTermChange: (newString) => setSearchString(newString),
          onTermSubmit: () => SearchApi(searchString),
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          propsData={{
            title: "Low Cost",
            results: filterResultsByPrice("$"),
            navigation,
          }}
        />
        <ResultList
          propsData={{
            title: "Medium Cost",
            results: filterResultsByPrice("$$"),
            navigation,
          }}
        />
        <ResultList
          propsData={{
            title: "High Cost",
            results: filterResultsByPrice("$$$$"),
            navigation,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
