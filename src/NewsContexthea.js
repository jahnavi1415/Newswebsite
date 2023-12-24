import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContexthea = createContext();
export const NewsContextheaProvider =(props) =>{
    const [data,setData]=useState();
    const apiKey="afc5a9eab3c246da866dc14b911e46ef";
    useEffect(()=>
    {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`)
            .then((response) => setData(response.data))
            .catch(error =>console.log(error));
        
    },[data]);
    return(
        <NewsContexthea.Provider value={{data}}>
            {props.children}
            </NewsContexthea.Provider>
    );

};