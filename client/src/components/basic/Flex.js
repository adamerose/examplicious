import styled from "styled-components";

export const Flex = styled.div`
  display: flex;

  /* Ordering & orientation */
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-flow: ${({ flexFlow }) => flexFlow};
  order: ${({ order }) => order};

  /* Alignment (perpendicular to flex-direction) */
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};

  /* Flexibility */
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex: ${({ flex }) => flex};

  /* Non-flex settings */
  & > * {
    margin: ${({ space }) => space || "10px"};
  }
`;
