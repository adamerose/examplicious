import styled, { css } from "styled-components/macro";

export default styled.button(
  ({ theme, ...props }) => css`
    display: grid;
    place-items: center;

    border-radius: 999px;
    height: ${theme.spacing[6]};
    width: ${theme.spacing[6]};
    svg {
      height: ${theme.spacing[4]};
      width: ${theme.spacing[4]};
    }
    &:hover {
      background-color: ${theme.backgroundSecondary};
    }
  `
);
