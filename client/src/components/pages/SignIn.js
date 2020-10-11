import { Card } from "antd";
import { observer } from "mobx-react-lite";
import { default as React } from "react";
import { useParams } from "react-router-dom";
import store from "../../store";
import styled from "styled-components";
import Header from "../Header";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostPage = observer(() => {
  let { hashId } = useParams();
  const post = store.posts.find((post) => post.hashId == hashId);

  return (
    <>
      <Header />
      <Card>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Card>
    </>
  );
});

export default PostPage;
