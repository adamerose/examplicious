import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import { default as React } from "react";
import { useParams } from "react-router-dom";
import Flex from "src/components/common/Flex";
import store from "src/store";

const useStyles = makeStyles({
  card: {
    margin: "0 50px",
    marginBottom: 20,
    whiteSpace: "pre-line",
  },
  NavLink: {
    color: "grey",
  },
});

const ArticlePage = observer(() => {
  let { hashId } = useParams();
  const article = store.articles.find((article) => article.hashId == hashId);
  const classes = useStyles();

  return (
    <Flex vertical alignItems="stretch">
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article?.body}
          </Typography>
        </CardContent>
      </Card>
    </Flex>
  );
});

export default ArticlePage;
