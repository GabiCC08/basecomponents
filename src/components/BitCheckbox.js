import { CheckBox } from "@bsoft-solution/base-ui.ui.checkbox";

export const BitCheckbox = (props) => {
  return (
    <>
      <CheckBox
        label={props.label}
        labelPosition={props.position}
        checked={props.checked}
        indeterminate={props.indeterminate}
        variantName={props.vName}
      />
    </>
  );
};
