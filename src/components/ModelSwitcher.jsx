import React from "react";
import useMacbookStore from "../Store";

const ModelSwitcher = () => {
  const { size, setSize } = useMacbookStore();

  const toggleSize = () => {
    setSize(size === "14" ? "16" : "14");
  };

  return (
    <mesh onClick={toggleSize} position={[0, -1, 0]}>
      <boxGeometry args={[0.3, 0.1, 0.3]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default ModelSwitcher;
