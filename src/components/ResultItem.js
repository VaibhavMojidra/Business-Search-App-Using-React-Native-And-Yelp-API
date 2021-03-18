import React from 'react';
import {View,Text,Image} from 'react-native';
import GlobalStyle from '../../assets/css/GlobalStyle';

const ResultItem = ({result}) =>{
    return(
        <View style={GlobalStyle.resultItemStyle}>
            <Image source={{uri: result.image_url}} style={GlobalStyle.imageStyle}/>
            <Text style={GlobalStyle.itemName}>{result.name}</Text>
            <Text>{result.rating} {"★".repeat(parseInt(result.rating))}
          {"☆".repeat(5 - parseInt(result.rating))} {result.review_count} Reviews</Text>
        </View>
    );
};

export default ResultItem;