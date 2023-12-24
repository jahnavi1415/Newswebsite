import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContextart = createContext();
export const NewsContextartProvider =(props) =>{
    const [data,setData]=useState();
    const apiKey="109beb1394e04e4d83d6356c401ceea7";
    useEffect(()=>
    {
        axios
        .get(
            `https://newsapi.org/v2/everything?q=articles&language=en&sortBy=popularity&apiKey=${apiKey}`)
            .then((response) => setData(response.data))
            .catch(error =>console.log(error));
        
    },[data]);
    return(
        <NewsContextart.Provider value={{data}}>
            {props.children}
            </NewsContextart.Provider>
    );

};