import React, { useContext } from "react";
import { NewsContexttec} from "../NewsContexttec";
import NewsArticle from "./NewsArticle";

function Technology(props) {
  const { data } = useContext(NewsContexttec);
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

export default Technology;