import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import GlobalStyle,{Colors} from '../../assets/css/GlobalStyle';
import ShowRestaurantDetail from "../screens/ShowRestaurantDetail";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{headerTitle: "Business Search",headerTitleAlign:'center', headerStyle:GlobalStyle.headerBackgroundStyle,headerTitleStyle:GlobalStyle.headerTitleStyle,headerTintColor:Colors.secondaryColor}} >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ShowRestaurantDetail" component={ShowRestaurantDetail}/>
    </Stack.Navigator>
  );
};

export default MyStack;