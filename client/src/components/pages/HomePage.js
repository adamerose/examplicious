import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Store
import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import Flex from "src/components/common/Flex";
import { store } from "src/store";

const useStyles = makeStyles({
  card: {
    margin: "0 50px",
    marginBottom: 20,
    whiteSpace: "pre-line",
    "& .MuiTypography-root": {
      maxHeight: 250,
      overflow: "hidden",
    },
  },
  NavLink: {
    color: "grey",
  },
});

const HomePage = observer(() => {
  const classes = useStyles();

  return (
    <Flex vertical alignItems="stretch">
      {store.articles.map((article, ix) => (
        <Card key={ix} variant="outlined" className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.body}
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink
              to={`/articles/${article.hashId}/${article.slug}`}
              className={classes.NavLink}
            >
              <Typography variant="body2">Read more...</Typography>
            </NavLink>
          </CardActions>
        </Card>
      ))}
    </Flex>
  );
});

export default HomePage;
