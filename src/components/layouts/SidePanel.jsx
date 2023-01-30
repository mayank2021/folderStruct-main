import React from "react";
import { ButtonPanel } from "./ButtonPanel";
import { FolderStructure } from "./FolderStructure";
import SearchBar from "./../SearchBar.jsx";

export const SidePanel = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <div
        className="tree"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <SearchBar />
        <FolderStructure />
      </div>
      <ButtonPanel />
    </div>
  );
};
