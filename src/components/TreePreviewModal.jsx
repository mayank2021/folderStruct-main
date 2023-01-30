import { Button } from "@mui/material";
import React, { useMemo, useRef } from "react";
import { Tree } from "react-organizational-chart";
import { useSelectedNodeState, useTreeState } from "../contexts";
import { TreeNode, ChartDiv } from "./TreeNode";
import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";
import { Modal } from "@mui/material";

import { Portal } from "./Portal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "20px 10px",
  overflow: "auto",
  maxHeight: "90vh",
  maxWidth: "80%",
};

export const TreePreviewModal = ({ open, handleClose }) => {
  const [treeState] = useTreeState();
  const [selectedNode] = useSelectedNodeState();

  const selectedLevelTree = useMemo(() => {
    const clone = { ...treeState };
    let currentNode = clone;
    selectedNode?.ancentors &&
      selectedNode.ancentors.forEach((node, i) => {
        if (i !== 0) {
          currentNode = currentNode.children[node];
        }
      });
    return currentNode;
  }, [treeState, selectedNode]);

  const treeContainerEl = useRef();

  const savePdf = () => {
    let ele = document.getElementById("tree-chart");

    html2canvas(ele).then((canvas) => {
      const data = canvas.toDataURL();

      const pdfExportSetting = {
        content: [
          {
            image: data,
            width: 500,
          },
        ],
      };
      pdfMake.createPdf(pdfExportSetting).download("family-tree.pdf");
    });
  };

  return (
    <Portal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div style={style}>
            <div
              style={{
                minHeight: "40vh",
                background: "#fff",
              }}
              id="tree-chart"
              ref={treeContainerEl}
            >
              <Tree label={<ChartDiv>{selectedLevelTree?.Name}</ChartDiv>}>
                {selectedLevelTree?.children &&
                  Object.values(selectedLevelTree.children).map((childNode) => (
                    <TreeNode key={childNode.id} node={childNode} />
                  ))}
              </Tree>
            </div>
            <Button onClick={savePdf}>Save PDF</Button>
          </div>
        </div>
      </Modal>
    </Portal>
  );
};
