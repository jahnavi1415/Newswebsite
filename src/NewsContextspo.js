import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContextspo = createContext();
export const NewsContextspoProvider =(props) =>{
    const [data,setData]=useState();
    const apiKey="d02f17ed2fc54842a46e00371cdacf41";
    useEffect(()=>
    {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`)
            .then((response) => setData(response.data))
            .catch(error =>console.log(error));
        
    },[data]);
    return(
        <NewsContextspo.Provider value={{data}}>
            {props.children}
            </NewsContextspo.Provider>
    );

};