// Store
import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import store from "src/store";
import styled from "styled-components";
import { Card } from "antd";
import PageWrapper from "src/components/common/PageWrapper";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 20px;
  }
`;

const HomePage = observer(() => {
  return (
    <PageWrapper>
      <Flex vertical alignItems="stretch">
        {store.posts.map((post, ix) => (
          <Card>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <NavLink to={`/posts/${post.hashId}/${post.slug}`}>
              Read more...
            </NavLink>
          </Card>
        ))}
      </Flex>
    </PageWrapper>
  );
});

export default HomePage;
