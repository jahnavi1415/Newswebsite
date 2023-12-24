import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContexttec = createContext();
export const NewsContexttecProvider =(props) =>{
    const [data,setData]=useState();
    const apiKey="5f2c9ccc9bd6489e9a719148cab089f5";
    useEffect(()=>
    {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`)
            .then((response) => setData(response.data))
            .catch(error =>console.log(error));
        
    },[data]);
    return(
        <NewsContexttec.Provider value={{data}}>
            {props.children}
            </NewsContexttec.Provider>
    );

};