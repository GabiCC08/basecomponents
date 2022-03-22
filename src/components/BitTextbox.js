import React from "react";
import { useState } from "react";
import { TextBox } from "@bsoft-solution/base-ui.ui.textbox";

export const BitTextbox = (props) => {
  const [text, setText] = useState("");
  return (
    <>
      <TextBox
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={props.placeholder}
        floatType={props.fType}
        enableMultiline={true}
        enableClearButton={true}
        autoHeight={true}
        maxLength={props.max}
        id={props.id}
        name={props.name}
      />
    </>
  );
};
