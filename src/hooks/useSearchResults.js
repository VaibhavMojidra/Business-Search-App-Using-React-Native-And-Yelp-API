import React,{useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const SearchApi = async(term)=>{
        try{
            const response= await yelp.get('/search',{
                params:{
                    limit: 50,
                    term,
                    location : 'san jose',
                }
            });
            setResults(response.data.businesses);
        }catch(err){
            setErrorMessage("Sorry can't find the '"+term+"', use other term or check your internet connection")
        }
    }
    useEffect(()=>{  // if we want to execute only once first time render
        SearchApi('shoes')
    },[])
    return [SearchApi,results,errorMessage];
}