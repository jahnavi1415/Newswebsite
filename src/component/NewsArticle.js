import React from "react";

function NewsArticle({ data }) {
  return (
    
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <img src={data.urlToImage} class="image" alt="Loading image.." width="420" height="300"></img>
     <br/>
      <p className="news__desc">{data.description}</p>
<br/>
     
     <a className="news__url" href={data.url} align="center" target="_blank">Read more</a>
     <br/>
    <br/>
      
     
      <span className="news__source" align="right">{data.source.name}</span>
    </div>
  
  );
}

export default NewsArticle;