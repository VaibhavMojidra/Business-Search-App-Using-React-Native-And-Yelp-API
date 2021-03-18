import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import GlobalStyle from "../../assets/css/GlobalStyle";
import yelp from "../api/yelp";

const { width } = Dimensions.get("window");
const height = (width * 40) / 60;

const ShowRestaurantDetail = ({ navigation, route }) => {
  const { id } = route.params;
  const [result, setResult] = useState(null);
  const [active, setActive] = useState(0);
  const getData = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    // if we want to execute only once first time render
    getData(id);
  }, []);

  let images = null;
  if (result !== null) {
    images = result.photos;
  }

  if (!result) {
    return (
      <View>
        <Text>Please wait..</Text>
      </View>
    );
  }

  return (
    <View>
      <View>
        <ScrollView
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          onScroll={(event) => {
            const slide = Math.ceil(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width
            );
            if (slide !== active) {
              setActive(slide);
            }
          }}
          style={{ width, height }}
        >
          {images.map((img, index) => {
            return (
              <Image
                source={{ uri: img }}
                style={{ width, height, resizeMode: "cover" }}
                key={index}
              />
            );
          })}
        </ScrollView>
        <View style={GlobalStyle.carouelDotContainer}>
          {images.map((i, k) => {
            return (
              <Text
                key={k}
                style={
                  k == active
                    ? GlobalStyle.carouelDotActive
                    : GlobalStyle.carouelDotInActive
                }
              >
                ⬤
              </Text>
            );
          })}
        </View>
      </View>
      <View style={GlobalStyle.businessDetailsData}>
        <Text style={GlobalStyle.businessDetailsData_Ratings}>
          {result.rating} {"★".repeat(parseInt(result.rating))}
          {"☆".repeat(5 - parseInt(result.rating))} ({result.review_count})
        </Text>
        <Text style={GlobalStyle.businessDetailsData_Name}>{result.name}</Text>
        <Text style={GlobalStyle.businessDetailsData_Number}>{result.phone}</Text>
        {result.location.address1 !== "" ? (<Text style={GlobalStyle.businessDetailsData_Addr}>{result.location.address1 + ","}</Text>) : null}
        {result.location.address2 !== "" ? (<Text style={GlobalStyle.businessDetailsData_Addr}>{result.location.address2 + ","}</Text>) : null}
        {result.location.address3 !== "" ? (<Text style={GlobalStyle.businessDetailsData_Addr}>{result.location.address3 + ","}</Text>) : null}
        <View style={{ flexDirection: "row" }}>
          {result.location.city !== "" ? (<Text style={GlobalStyle.businessDetailsData_Addr}>{result.location.city + " - "}</Text>) : null}
          {result.location.zip_code !== "" ? (<Text style={GlobalStyle.businessDetailsData_Addr}>{result.location.zip_code + ", "}</Text>) : null}
          {result.location.state !== "" ? (<Text style={GlobalStyle.businessDetailsData_Addr}>{result.location.state + ", "}</Text>) : null}
          {result.location.country !== "" ? (<Text style={GlobalStyle.businessDetailsData_Addr}>{result.location.country + ","}</Text>) : null}
        </View>
      </View>
    </View>
  );
};

export default ShowRestaurantDetail;
