import { Card } from "antd";
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

const PostPage = observer(() => {
  let { hashId } = useParams();
  const post = store.posts.find((post) => post.hashId == hashId);

  return (
    <PageWrapper>
      <Card>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Card>
    </PageWrapper>
  );
});

export default PostPage;
