import { DatePicker } from "@bsoft-solution/base-ui.ui.datepicker";

export const BitDatepicker = (props) => {
  return (
    <>
      <DatePicker
        dateValue={props.value}
        minDate={props.min}
        maxDate={props.max}
        dateFormat={props.format}
      />
    </>
  );
};
