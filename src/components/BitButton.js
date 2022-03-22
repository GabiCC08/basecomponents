import { Button } from "@bsoft-solution/base-ui.ui.button";

export const BitButton = (props) => {
  return (
    <>
      <Button
        textButton={props.text}
        variantName={props.vName}
        variantType={props.vType}
        isToggle={props.toggle}
      />
    </>
  );
};
