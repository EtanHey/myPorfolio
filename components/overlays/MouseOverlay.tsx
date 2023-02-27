"use client";
import React, {
  LegacyRef,
  MouseEvent,
  RefObject,
  useEffect,
  useRef,
} from "react";
const MouseOverlay = ({ children }: { children: React.ReactNode }) => {
  const mouseOverlayRef: RefObject<HTMLSpanElement> = useRef(null);
  const handleMouseOverlayMove = (e: MouseEvent) => {
    console.log("here");

    const mouseOverlayEl = mouseOverlayRef.current;
    const mouseOverlayStyle = mouseOverlayEl?.style;
    const { clientX, clientY } = e;

    if (mouseOverlayStyle && mouseOverlayEl) {
      mouseOverlayStyle.left = `${clientX}px`;
      mouseOverlayStyle.top = `${clientY}px`;
      mouseOverlayStyle.transform = `translate(-50%, -50%)`;
      mouseOverlayStyle.opacity = "1";
    }
    console.dir(mouseOverlayStyle);
  };
  return (
    <div className="mouse_overlay-bg" onPointerMove={handleMouseOverlayMove}>
      {children}
      <span ref={mouseOverlayRef} className="mouse_overlay -z-50" />
    </div>
  );
};

export default MouseOverlay;
