import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import store from "src/store";
import styled, { useTheme } from "styled-components";
import { Modal, Button, Card } from "antd";
import ReactJson from "react-json-view";

const ThemeSwitch = observer(() => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Img
        src="https://image.flaticon.com/icons/svg/456/456250.svg"
        style={store.darkTheme ? {} : undefined}
        onClick={store.toggleDarkTheme}
        onContextMenu={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      />

      <Modal
        visible={open}
        onClose={() => {
          setOpen(false);
        }}
        style={{ display: "grid", placeItems: "center" }}
      >
        <StyledCard>
          <ReactJson
            src={JSON.parse(JSON.stringify(theme || {}))}
            collapsed
            theme={store.darkTheme && "monokai"}
          />
        </StyledCard>
      </Modal>
    </>
  );
});

export default ThemeSwitch;

const StyledCard = styled(Card)`
  overflow: scroll;
  max-height: 500px;
  height: 500px;
  width: 90%;
  margin: auto;
  padding: 10px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  ${({ theme }) => theme.palette.type == "dark" && "filter: invert(1)"}
`;
