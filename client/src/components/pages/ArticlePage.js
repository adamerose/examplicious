import { Card, CardContent, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { default as React } from "react";
import { useParams } from "react-router-dom";
import store from "src/store";
import styled from "styled-components";
import PageWrapper from "src/components/common/PageWrapper";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticlePage = observer(() => {
  let { hashId } = useParams();
  const article = store.articles.find((article) => article.hashId == hashId);

  return (
    <PageWrapper>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.body}
          </Typography>
        </CardContent>
      </Card>
    </PageWrapper>
  );
});

export default ArticlePage;
