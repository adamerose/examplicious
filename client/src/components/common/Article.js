import React from "react";
import { Card } from "antd";

const Article = (props) => {
  <div className="paper">
    <Card title={props.title}>{props.body}</Card>
  </div>;
};

export default Article;
