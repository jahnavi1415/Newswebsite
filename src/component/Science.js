import React, { useContext } from "react";
import { NewsContextsci } from "../NewsContextsci";
import NewsArticle from "./NewsArticle";

function Science(props) {
  const { data } = useContext(NewsContextsci);
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


export default Science;
