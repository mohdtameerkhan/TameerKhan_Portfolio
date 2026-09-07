"use client";

import { useEffect, useRef } from "react";

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    let animationFrame: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      context.clearRect(0, 0, width, height);

      const cellSize = 80;

      const columns = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      for (let row = 0; row <= rows; row++) {
        for (let column = 0; column <= columns; column++) {
          const x = column * cellSize;
          const y = row * cellSize;

          const centerX = x + cellSize / 2;
          const centerY = y + cellSize / 2;

          const dx = mouse.x - centerX;
          const dy = mouse.y - centerY;

          const distance = Math.sqrt(dx * dx + dy * dy);

          // Creates an irregular, non-perfect highlight shape
          const distortion =
            Math.sin(column * 1.7 + row * 2.3) * 25 +
            Math.cos(row * 1.4 - column * 0.8) * 20;

          const highlightDistance = 125 + distortion;

          const intensity = Math.max(
            0,
            1 - distance / highlightDistance
          );

          // Almost invisible normally
          const baseOpacity = 0.008;

          // Very subtle mouse interaction
          const hoverOpacity = intensity * 0.09;

          context.strokeStyle = `rgba(255, 255, 255, ${
            baseOpacity + hoverOpacity
          })`;

          context.lineWidth = 1;

          context.strokeRect(x, y, cellSize, cellSize);
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}