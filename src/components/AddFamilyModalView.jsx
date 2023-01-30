import { Button, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import { FamilyDetailsForm } from "./FamilyDetailsForm";

export const AddFamilyModalView = ({ open, setOpen, editNode }) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FamilyDetailsForm handleClose={handleClose} editNode={editNode} />
      </Modal>
    </>
  );
};
