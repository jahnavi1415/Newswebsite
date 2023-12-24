import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();
export const NewsContextProvider =(props) =>{
    const [data,setData]=useState();
    const apiKey="7ecb33f3b05e4b08bcfae52c38107263";
    useEffect(()=>
    {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apiKey}`)
            .then((response) => setData(response.data))
            .catch(error =>console.log(error));
        
    },[data]);
    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
            </NewsContext.Provider>
    );

};