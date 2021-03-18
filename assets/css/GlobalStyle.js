import { StyleSheet } from "react-native";

export const Colors = {
  subtitleGrayColor: "#7C7E7D",
  lightGray: "#d4d6d5",
  primaryColor: "#1A1A1A",
  // primaryDarkColor : "#0B3844",
  secondaryColor: "#FFFFFF",
};

export default StyleSheet.create({
  headerBackgroundStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTitleStyle: {
    color: Colors.secondaryColor,
  },
  searchScreenView: {
    flex: 1, // cover only the part
  },
  searchBarStyle: {
    backgroundColor: Colors.lightGray,
    marginHorizontal: 12,
    marginVertical: 15,
    height: 45,
    borderRadius: 5,
    flexDirection: "row",
  },
  searchInputStyle: {
    fontSize: 18,
    flex: 1,
  },
  searchBarIcon: {
    alignSelf: "center",
    textAlign: "center",
    width: 45,
  },
  resultListTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
    marginBottom: 5,
  },
  resultItemStyle: {
    marginLeft: 12,
    marginBottom: 10,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  carouelDotActive: {
    color: "#fff",
    margin: 3,
  },
  carouelDotInActive: {
    color: "#888",
    margin: 3,
  },
  carouelDotContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  businessDetailsData: {
    padding:10,
  },
  businessDetailsData_Ratings: {
    marginTop:10,
    fontSize:16,
  },
  businessDetailsData_Name: {
    marginTop:5,
    fontSize:20,
    fontWeight: 'bold'
  },
  businessDetailsData_Number: {
    marginTop:5,
    marginBottom:8,
    fontSize:16,
  },
  businessDetailsData_Addr: {
    fontSize:15,
    fontStyle: 'italic',
  },
});
