import React from "react";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

import useMacbookStore from "../Store";
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from "./ModelSwitcher.jsx";   // ✅ FIXED IMPORT

// ---- Load & Render 3D Model ----
const MacbookModel = ({ modelPath, color, scale }) => {
  const { scene } = useGLTF(modelPath);

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.color.set(color);
    }
  });

  return <primitive object={scene} scale={scale} />;
};

const ProductViewer = () => {
  const { color, scale, size, setColor, setSize, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleSize = (newSize) => {
    setSize(newSize);
    setScale(newSize === "14" ? 0.06 : 0.08);
  };

  return (
    <section id="product-viewer" className="text-white">
      <h2 className="text-3xl font-semibold mb-4">Explore the Product</h2>

      {/* --- Controls --- */}
      <div className="controls">
        <p className="info">MacBook Pro {size}"</p>

        <div className="flex-center gap-5 mt-5">
          {/* ---- COLOR PICKER ---- */}
          <div className="color-control flex gap-3">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "w-6 h-6 rounded-full bg-neutral-300 cursor-pointer",
                color === "#adb5bd" && "ring-2 ring-white"
              )}
            ></div>

            <div
              onClick={() => setColor("#0a0a0a")}
              className={clsx(
                "w-6 h-6 rounded-full bg-neutral-900 cursor-pointer",
                color === "#0a0a0a" && "ring-2 ring-white"
              )}
            ></div>
          </div>

          {/* ---- SIZE PICKER ---- */}
          <div className="size-control flex gap-3">
            <div
              onClick={() => handleSize("14")}
              className={clsx(
                "px-3 py-1 rounded cursor-pointer",
                size === "14" ? "bg-white/20" : "bg-white/5"
              )}
            >
              <p>14"</p>
            </div>

            <div
              onClick={() => handleSize("16")}
              className={clsx(
                "px-3 py-1 rounded cursor-pointer",
                size === "16" ? "bg-white/20" : "bg-white/5"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---- 3D CANVAS ---- */}
      <div className="w-full h-[500px] mt-10">
        <Canvas>
          <Stage environment="city" intensity={0.8}>
            <MacbookModel
              modelPath={size === "14" ? "/macbook-14.glb" : "/macbook-16.glb"}
              color={color}
              scale={scale}
            />
          </Stage>

          <OrbitControls enableZoom={false} />
          <ModelSwitcher scale={scale} /> {/* ✅ WILL NOW WORK */}
        </Canvas>
      </div>
    </section>
  );
};

export default ProductViewer;

