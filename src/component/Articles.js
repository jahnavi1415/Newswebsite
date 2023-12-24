import React, { useContext } from "react";
import { NewsContextart } from "../NewsContextart";
import NewsArticle from "./NewsArticle";

function Articles(props) {
  const { data } = useContext(NewsContextart);
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

export default Articles;