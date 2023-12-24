import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContextsci = createContext();
export const NewsContextsciProvider =(props) =>{
    const [data,setData]=useState();
    const apiKey="b79d11ae3e3a48b5b7387d38d4b707f5";
    useEffect(()=>
    {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${apiKey}`)
            .then((response) => setData(response.data))
            .catch(error =>console.log(error));
        
    },[data]);
    return(
        <NewsContextsci.Provider value={{data}}>
            {props.children}
            </NewsContextsci.Provider>
    );

};