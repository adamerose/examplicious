import React from "react";
import MasonryGrid from "../common/MasonryGrid";
import Dummy from "dummyjs";
import styled from "styled-components/macro";

const Home = () => {
  const items = new Array(8).fill().map((item, i) => (
    <StyledDiv key={i}>
      <h3>{i}</h3>
      <div>{Dummy.text("2,20")}</div>
    </StyledDiv>
  ));

  return (
    <NotesWrapper>
      <MasonryGrid>{items}</MasonryGrid>
    </NotesWrapper>
  );
};

const NotesWrapper = styled.div`
  padding: 30px;
`;

const StyledDiv = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 250px;
  min-width: 250px;
  overflow-y: hidden;
  padding: 15px;
  margin: 15px;
`;

export default Home;
