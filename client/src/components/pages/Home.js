// Store
import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import store from "../../store";
import styled from "styled-components";
import { Card } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 20px;
  }
`;

const HomePage = observer(() => {
  return (
    <>
      <Container>
        {store.posts.length > 0 ? (
          store.posts.map((post, ix) => (
            <Card>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
              <NavLink to={`/posts/${post.hashId}/${post.slug}`}>
                Read more...
              </NavLink>
            </Card>
          ))
        ) : (
          <p>No posts to display</p>
        )}
      </Container>
    </>
  );
});

export default HomePage;
