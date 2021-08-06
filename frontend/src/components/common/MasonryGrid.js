import React from "react";
import { MuuriComponent, getResponsiveStyle } from "muuri-react";

import _ from "lodash";

const MasonryGrid = ({ children }) => {
  const items = children;

  return (
    <MuuriComponent
      dragEnabled
      dragFixed
      dragSortPredicate={{
        action: "swap",
      }}
      dragSortHeuristics={{
        sortInterval: 0,
      }}
    >
      {items}
    </MuuriComponent>
  );
};

export default MasonryGrid;
