import React from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import _ from "lodash";

const AutoResponsive = ({ variants }) => {
  const elRefs = Array(variants.length)
    .fill(null)
    .map((x) => React.useRef(null));
  const windowWidth = useWindowWidth();

  // Rerender once after the initial render since we need ref.current to be defined
  const [ignore, forceUpdate] = React.useReducer((x) => x + 1, 0);
  React.useLayoutEffect(() => {
    forceUpdate();
  }, []);

  const fitsFlags = elRefs.map((ref) => {
    return ref?.current?.scrollWidth < windowWidth;
  });

  return (
    <>
      {variants.map((variant, ix) => (
        <div
          key={ix}
          ref={elRefs[ix]}
          style={{ visibility: "hidden", position: "fixed" }}
        >
          {variants[ix]}
        </div>
      ))}

      <div>{variants[fitsFlags.findIndex((x) => x)]}</div>
    </>
  );
};

export default AutoResponsive;
