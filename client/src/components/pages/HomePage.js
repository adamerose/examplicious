import { observer } from "mobx-react-lite";
import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { Flex } from "src/components/utility";
import { store } from "src/store";

const HomePage = observer(() => {
  return (
    <Flex flexDirection="column" alignItems="stretch">
      {store.articles.map((article, ix) => (
        <Card key={ix}>
          <h5>{article.title}</h5>
          <p>{article.body}</p>
          <NavLink to={`/articles/${article.hashId}/${article.slug}`}>
            <p>Read more...</p>
          </NavLink>
        </Card>
      ))}
    </Flex>
  );
});

export default HomePage;
