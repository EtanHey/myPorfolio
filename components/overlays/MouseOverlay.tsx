"use client";
import React, { MouseEvent, RefObject, useRef } from "react";
const MouseOverlay = ({ children }: { children: React.ReactNode }) => {
  const mouseOverlayRef: RefObject<HTMLSpanElement> = useRef(null);
  const handleMouseOverlayMove = (e: MouseEvent) => {
    const mouseOverlayEl = mouseOverlayRef.current;
    const mouseOverlayStyle = mouseOverlayEl?.style;
    const { clientX, clientY } = e;
    const width = mouseOverlayEl?.offsetWidth;
    const height = mouseOverlayEl?.offsetHeight;
    if (mouseOverlayStyle && mouseOverlayEl && width && height) {
      mouseOverlayEl.animate(
        {
          left: `${clientX - width / 2}px`,
          top: `${clientY - height / 2}px`,
        },
        { duration: 2500, fill: "forwards" }
      );
      mouseOverlayStyle.opacity = "1";
    }
  };
  return (
    <div
      className="relative flex h-full flex-col overflow-y-clip"
      onPointerMove={handleMouseOverlayMove}
    >
      {children}
      <span
        ref={mouseOverlayRef}
        className="absolute blur-xl -z-50 h-60 w-60 animate-rotate  rounded-full bg-gradient-to-r from-[aquamarine] to-[mediumpurple] opacity-0"
      />
    </div>
  );
};

export default MouseOverlay;
