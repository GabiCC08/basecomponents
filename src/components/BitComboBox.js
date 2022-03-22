import { ComboBox } from "@bsoft-solution/base-ui.ui.combo-box";

export const BitComboBox = (props) => {
  return (
    <>
      <ComboBox
        dataSrc={props.data}
        textValue={props.text}
        idKey={props.id}
        placeholder={props.placeholder}
      />
    </>
  );
};
