import React from "react";
import { useState } from "react";
import { Burger } from "@bsoft-solution/base-ui.ui.burger";

export const BitBurger = (props) => {
  const [active, setActive] = useState(false);
  return (
    <Burger
      width={props.width}
      lineHeight={props.lineHeight}
      lineSpacing={props.lineSpacing}
      active={active}
      onClick={() => setActive(!active)}
      color={props.color}
    />
  );
};
