import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Modal, Button } from "antd";
import { colorBrightness } from "src/components/utility";
const PaletteDisplay = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  console.log(theme);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Show Palette</Button>
      <Modal
        title="Color Palette"
        visible={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        {Object.keys(theme).map((key) => (
          <div
            style={{
              backgroundColor: theme[key],
              color: colorBrightness(theme[key]) > 128 ? "black" : "white",
            }}
          >
            {key}
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default PaletteDisplay;
