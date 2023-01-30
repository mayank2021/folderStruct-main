import React, { useState } from "react";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { TreePreviewModal } from "../TreePreviewModal";
import { Portal } from "../Portal";
import { style } from "./Button";

export const PrintFamilyTreeBtn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const printToPdf = () => {
    handleOpen();
  };

  return (
    <>
      <Button
        className="action-button"
        sx={style}
        variant="contained"
        component="label"
        onClick={(e) => printToPdf()}
      >
        Print Family Tree
      </Button>
      {/* <Portal>
        <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <div>
            
          </div>
        </Modal>
      </Portal> */}
      <TreePreviewModal open={open} handleClose={handleClose} />
    </>
  );
};
