import React, { useContext } from "react";
import { NewsContexthea } from "../NewsContexthea";
import NewsArticle from "./NewsArticle";

function Health(props) {
  const { data } = useContext(NewsContexthea);
  console.log(data);

  return (
    <div>
    
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default Health;
