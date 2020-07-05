import styled from "styled-components";

export const Flex = styled.div`
  display: flex;

  // Ordering & Orientation
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-flow: ${({ flexFlow }) => flexFlow};
  order: ${({ order }) => order};

  // Alignment
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};

  // Flexibility
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex: ${({ flex }) => flex};

  // Non-flex settings
  & > * {
    margin: ${({ space }) => space || "10px"};
  }
`;

export const Spacer = styled.div`
  flex-grow: 1;
`;

export const Container = styled.div`
  max-width: 1024px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  width: 100%;
`;

export const colorShade = (col, amt) => {
  col = col.replace(/^#/, "");
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? "0" : "") + r;
  const gg = (g.length < 2 ? "0" : "") + g;
  const bb = (b.length < 2 ? "0" : "") + b;

  return `#${rr}${gg}${bb}`;
};

export const colorBrightness = (col) => {
  col = col.replace(/^#/, "");
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];

  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722);

  return brightness;
};
