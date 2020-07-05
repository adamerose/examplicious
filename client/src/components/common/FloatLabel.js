import React, { useState } from "react";
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-bottom: 12px;

  &>.ant-input {
    padding: 16px 12px 4px 11px;
  }

  &>.ant-select .ant-select-selector {
    padding: 16px 10px 4px 11px;
  }

  &>.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    padding: 16px 10px 4px 11px;
    height: 48px;
  }

  &>.ant-select-single .ant-select-selector .ant-select-selection-search {
    top: 16px;
  }

`

const Label = styled.label`
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 12px;
  transition: 0.2s ease all;
  ${({ float }) => float && 'top: 6px; font-size: 10px;'}
`
const FloatLabel = props => {
  const [focus, setFocus] = useState(false);
  const { children, label, value } = props;

  return (
    <Container
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <Label float={focus || (value && value.length !== 0)}>{label}</Label>
    </Container>
  );
};

export default FloatLabel;
