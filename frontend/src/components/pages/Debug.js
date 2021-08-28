import React from "react";
import styled from "styled-components/macro";

import AppStateDisplay from "../common/AppStateDisplay";

const Debug = () => {
  return (
    <Wrapper>
      <AppStateDisplay />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 45px;
`;

export default Debug;
