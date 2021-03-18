import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";
import ResultItem from "./ResultItem";

const ResultList = ({ propsData }) => {
  return (
    <View>
      <Text style={GlobalStyle.resultListTitle}>{propsData.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={propsData.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=> propsData.navigation.navigate('ShowRestaurantDetail',{id: item.id})}>
              <ResultItem result={item} />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default ResultList;
