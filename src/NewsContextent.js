import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContextent = createContext();
export const NewsContextentProvider =(props) =>{
    const [data,setData]=useState();
    const apiKey="e35578ff4abb4bedbdccaa6e72a9ab08";
    useEffect(()=>
    {
        axios
        .get(
            
            `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`)
            .then((response) => setData(response.data))
            .catch(error =>console.log(error));
        
    },[data]);
    return(
        <NewsContextent.Provider value={{data}}>
            {props.children}
            </NewsContextent.Provider>
    );

};