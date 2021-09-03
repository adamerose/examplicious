import React, { useState } from "react";
import styled from "styled-components";

function Debug() {
  const state = useState();

  return (
    <Wrapper>
      <pre>{JSON.stringify(state)}</pre>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 20px 10px;
  padding: 10px 20px;
  margin-right: auto;
  width: fit-content;
  max-width: 800px;
  overflow-x: scroll;
  border: 1px solid black;
`;
export default Debug;
