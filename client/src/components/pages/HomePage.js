import React from "react";
import { Card } from "antd";

// Store
import { observer } from "mobx-react-lite";
import { store } from "src/store";

const HomePage = observer(() =>
  store.articles.map((article) => (
    <div className="article">
      <Card className="paper article" title={article.title}>
        {article.body}
      </Card>
    </div>
  ))
);

export default HomePage;
