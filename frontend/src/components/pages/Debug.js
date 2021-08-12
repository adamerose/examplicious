import React from "react";
import styled from "styled-components/macro";

import Counter from "../common/Counter";
import AppStateDisplay from "../common/AppStateDisplay";

const Debug = () => {
  return (
    <Wrapper>
      <Counter />
      <AppStateDisplay />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 45px;
`;

export default Debug;
