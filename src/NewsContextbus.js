import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContextbus = createContext();
export const NewsContextbusProvider =(props) =>{
    const [data,setData]=useState();
    const apiKey="86078e9703924513bad12ed78fc0c502";
    useEffect(()=>
    {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`)
            .then((response) => setData(response.data))
            .catch(error =>console.log(error));
        
    },[data]);
    return(
        <NewsContextbus.Provider value={{data}}>
            {props.children}
            </NewsContextbus.Provider>
    );

};