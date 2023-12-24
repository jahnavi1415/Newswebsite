import React, { useContext } from "react";
import { NewsContextspo } from "../NewsContextspo";
import NewsArticle from "./NewsArticle";

function Sports(props) {
  const { data } = useContext(NewsContextspo);
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

export default Sports;