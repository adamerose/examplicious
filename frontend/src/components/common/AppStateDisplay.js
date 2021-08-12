import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectRootStore } from "../../store/rootStore";

function AppStateDisplay() {
  return (
    <Wrapper>
      <pre>{JSON.stringify(useSelector(selectRootStore))}</pre>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 20px 10px;
  padding: 10px 20px;
  margin-right: auto;
  width: fit-content;
  border: 1px solid black;
`;
export default AppStateDisplay;
