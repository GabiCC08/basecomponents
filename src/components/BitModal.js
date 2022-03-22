import React from "react";
import { useState } from "react";
import { Button } from "@bsoft-solution/base-ui.ui.button";
import { Modal } from "@bsoft-solution/base-ui.ui.modal";

export const BitModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Button onClick={handleOpen} textButton="Open" variantName="success" />
      <Modal
        isOpen={open}
        onRequestClose={handleOpen}
        contentLabel="Modal"
        closeOnOverlay={false}
        enableOverlayBg={false}
        closeOnEsc={true}
        height={props.height}
        width={props.width}
      >
        <Button onClick={handleOpen} textButton="Close" variantName="danger" />
        {props.children}
      </Modal>
    </div>
  );
};
