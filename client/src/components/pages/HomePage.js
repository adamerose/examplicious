import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
// Store
import { observer } from "mobx-react-lite";
import { store } from "src/store";

import Flex from "src/components/common/Flex";
const useStyles = makeStyles({
  Card: {
    margin: "0 50px",
    marginBottom: 20,
    maxHeight: 500,
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
        <Card key={ix} variant="outlined" className={classes.Card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {article.body}
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to="" className={classes.NavLink}>
              <Typography variant="body2">Read more...</Typography>
            </NavLink>
          </CardActions>
        </Card>
      ))}
    </Flex>
  );
});

export default HomePage;
