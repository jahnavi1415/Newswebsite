import React, { useContext } from "react";
import { NewsContextent } from "../NewsContextent";
import NewsArticle from "./NewsArticle";

function Entertainment(props) {
  const { data } = useContext(NewsContextent);
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

export default Entertainment;