import React, { useContext } from "react";
import { NewsContextbus } from "../NewsContextbus";
import NewsArticle from "./NewsArticle";

function Business(props) {
  const { data } = useContext(NewsContextbus);
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

export default Business;