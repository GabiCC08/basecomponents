import { AutoComplete } from "@bsoft-solution/base-ui.ui.auto-complete";

export const BitAutocomplete = (props) => {
  return (
    <>
      <AutoComplete
        data={props.data}
        placeholder={props.placeholder}
        fieldValue={props.fieldValue}
      />
    </>
  );
};
