import { TextBoxMasked } from "@bsoft-solution/base-ui.ui.inputmask";

export const BitInputmask = (props) => {
  return (
    <>
      <TextBoxMasked
        mask={props.mask}
        floatType={props.fType}
        customChars={props.customChars}
        placeholder={props.placeholder}
        promptChar={props.promptChar}
      />
    </>
  );
};
