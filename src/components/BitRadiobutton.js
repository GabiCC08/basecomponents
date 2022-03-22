import { RadioButton } from "@bsoft-solution/base-ui.ui.radiobutton";

export const BitRadiobutton = (props) => {
  return (
    <>
      <RadioButton
        label={props.label}
        name={props.name}
        variantName={props.vName}
        labelPosition={props.position}
        checked={props.checked}
      />
    </>
  );
};
