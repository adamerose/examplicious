import React from "react";
import styled from "styled-components";
import Nav from "src/components/common/Header";

export const Container = styled.div`
  max-width: 1024px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  width: 100%;
`;

const PageWrapper = (props) => (
  <>
    <Nav />
    <Container>{props.children}</Container>
  </>
);

export default PageWrapper;
