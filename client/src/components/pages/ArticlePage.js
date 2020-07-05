import { observer } from "mobx-react-lite";
import { default as React } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";

import { Flex } from "src/components/utility";
import store from "src/store";

const ArticlePage = observer(() => {
  let { hashId } = useParams();
  const article = store.articles.find((article) => article.hashId == hashId);

  return (
    <Flex flexDirection="column" alignItems="stretch">
      <Card title={article?.title}>
        <p>{article?.body}</p>
      </Card>
    </Flex>
  );
});

export default ArticlePage;
