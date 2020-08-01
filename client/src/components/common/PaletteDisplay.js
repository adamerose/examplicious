import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Modal, Button } from "@material-ui/core";

const PaletteDisplay = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Show Palette</Button>
      <Modal title="Color Palette" open={open} onClose={() => setOpen(false)}>
        {Object.keys(theme).map((key) => (
          <div
            style={{
              backgroundColor: theme.background.main,
              color: theme.text,
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
