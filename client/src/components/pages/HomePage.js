import { makeStyles } from "@material-ui/core/styles";
// Store
import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { store } from "src/store";
import styled from "styled-components";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 20px;
  }
`;
const HomePage = observer(() => {
  return (
    <Flex vertical alignItems="stretch">
      {store.articles.map((article, ix) => (
        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.body}
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to={`/articles/${article.hashId}/${article.slug}`}>
              <Typography variant="body2">Read more...</Typography>
            </NavLink>
          </CardActions>
        </Card>
      ))}
    </Flex>
  );
});

export default HomePage;
