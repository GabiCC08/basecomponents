import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { BitAutocomplete } from "./components/BitAutocomplete";
import { BitBurger } from "./components/BitBurger";
import { BitButton } from "./components/BitButton";
import { BitCheckbox } from "./components/BitCheckbox";
import { BitComboBox } from "./components/BitComboBox";
import { BitDatepicker } from "./components/BitDatepicker";
import { BitInputmask } from "./components/BitInputmask";
import { BitModal } from "./components/BitModal";
import { BitRadiobutton } from "./components/BitRadiobutton";
import { BitTextbox } from "./components/BitTextbox";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "jXLoM2GHLBG2mG6Xb1BAum", // ID of a project you are using
      token:
        "D6401yaaTkWHAH71RDHBQXKuPF9y0Dlrmcu7nfQzkpvRogGqxFmWh6OHfGOp4zudaCwWxQT0DbHDxWr8jPS6ZA", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(BitAutocomplete, {
  name: "BitAutocomplete",
  props: {
    data: {
      type: "object",
      defaultValue: ["opt1", "opt2", "opt3"],
    },
    placeholder: {
      type: "string",
      defaultValue: "placeholder",
    },
    fieldValue: {
      type: "string",
      defaultValue: "fieldValue",
    },
  },
  importPath: "./src/components/BitAutocomplete",
});

PLASMIC.registerComponent(BitBurger, {
  name: "BitBurger",
  props: {
    width: {
      type: "number",
      defaultValue: 26,
    },
    lineHeight: {
      type: "number",
      defaultValue: 2,
    },
    lineSpacing: {
      type: "number",
      defaultValue: 5,
    },
    active: {
      type: "boolean",
      defaultValue: false,
    },
    color: {
      type: "string",
      defaultValue: "#6F3B8E",
    },
  },
  importPath: "./src/components/BitBurger",
});

PLASMIC.registerComponent(BitButton, {
  name: "BitButton",
  props: {
    text: {
      type: "string",
      defaultValue: "bit button",
    },
    vName: {
      type: "choice",
      options: ["primary", "success", "info", "warning", "danger", "link"],
      defaultValue: "primary",
    },
    vType: {
      type: "choice",
      options: ["flat", "outline", "round"],
      defaultValue: "outline",
    },
    toggle: {
      type: "boolean",
      defaultValue: false,
    },
  },
  importPath: "./src/components/BitButton",
});

PLASMIC.registerComponent(BitCheckbox, {
  name: "BitCheckbox",
  props: {
    label: {
      type: "string",
      defaultValue: "Checkbox label",
    },
    position: {
      type: "choice",
      options: ["After", "Before"],
      defaultValue: "After",
    },
    checked: {
      type: "boolean",
      defaultValue: false,
    },
    indeterminate: {
      type: "boolean",
      defaultValue: false,
    },
    vName: {
      type: "choice",
      options: ["primary", "success", "info", "warning", "danger"],
      defaultValue: "primary",
    },
  },
  importPath: "./src/components/BitCheckbox",
});

PLASMIC.registerComponent(BitComboBox, {
  name: "BitComboBox",
  props: {
    data: {
      type: "object",
      defaultValue: [
        { id: 1, option: "Opt1" },
        { id: 2, option: "Opt2" },
        { id: 3, option: "Opt3" },
        { id: 4, option: "Opt4" },
        { id: 5, option: "Opt5" },
      ],
    },
    text: {
      type: "string",
      defaultValue: "option",
    },
    id: {
      type: "string",
      defaultValue: "id",
    },
    placeholder: {
      type: "string",
      defaultValue: "bit combo-box",
    },
  },
  importPath: "./src/components/BitComboBox",
});

PLASMIC.registerComponent(BitDatepicker, {
  name: "BitDatepicker",
  props: {
    value: {
      type: "string",
      defaultValue: "2022/01/8",
    },
    min: {
      type: "string",
      defaultValue: "2022/01/01",
    },
    max: {
      type: "string",
      defaultValue: "2022/01/15",
    },
    format: {
      type: "string",
      defaultValue: "yyyy/MM/dd",
    },
  },
  importPath: "./src/components/BitDatepicker",
});

PLASMIC.registerComponent(BitInputmask, {
  name: "BitInputmask",
  props: {
    mask: {
      type: "string",
      defaultValue: "00:00 >PM",
    },
    fType: {
      type: "choice",
      options: ["Never", "Always", "Auto"],
      defaultValue: "Always",
    },
    customChars: {
      type: "object",
      defaultValue: { P: "P,A,a,p", M: "M,m" },
    },
    placeholder: {
      type: "string",
      defaultValue: "Time (ex: 00:00AM/PM)",
    },
    promptChar: {
      type: "string",
      defaultValue: "#",
    },
  },
  importPath: "./src/components/BitInputmask",
});

PLASMIC.registerComponent(BitModal, {
  name: "BitModal",
  props: {
    label: {
      type: "string",
      defaultValue: "Modal",
    },
    closeOnOverlay: {
      type: "boolean",
      defaultValue: false,
    },
    enableOverlayBg: {
      type: "boolean",
      defaultValue: false,
    },
    closeOnEsc: {
      type: "boolean",
      defaultValue: true,
    },
    height: {
      type: "string",
      defaultValue: "auto",
    },
    width: {
      type: "string",
      defaultValue: "auto",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Hi!",
        },
      ],
    },
  },
  importPath: "./src/components/BitModal",
});

PLASMIC.registerComponent(BitRadiobutton, {
  name: "BitRadiobutton",
  props: {
    label: {
      type: "string",
      defaultValue: "Radiobutton label",
    },
    name: {
      type: "string",
      defaultValue: "option",
    },
    position: {
      type: "choice",
      options: ["After", "Before"],
      defaultValue: "After",
    },
    checked: {
      type: "boolean",
      defaultValue: false,
    },
    vName: {
      type: "choice",
      options: ["primary", "success", "info", "warning", "danger"],
      defaultValue: "primary",
    },
  },
  importPath: "./src/components/BitRadiobutton",
});

PLASMIC.registerComponent(BitTextbox, {
  name: "BitTextbox",
  props: {
    placeholder: {
      type: "string",
      defaultValue: "Textbox",
    },
    fType: {
      type: "choice",
      options: ["Never", "Always", "Auto"],
      defaultValue: "Always",
    },
    enableMultiline: {
      type: "boolean",
      defaultValue: true,
    },
    enableClearButton: {
      type: "boolean",
      defaultValue: true,
    },
    autoHeight: {
      type: "boolean",
      defaultValue: true,
    },
    max: {
      type: "number",
      defaultValue: null,
    },
    id: {
      type: "string",
      defaultValue: "",
    },
    name: {
      type: "string",
      defaultValue: "",
    },
  },
  importPath: "./src/components/BitTextbox",
});
