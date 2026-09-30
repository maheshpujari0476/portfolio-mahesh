"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  anchorX: number;
  anchorY: number;
  phase: number;
  radius: number;
  alpha: number;
};

const NODE_COUNT = 48;

export default function FloatingPhysicsGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = performance.now();
    let nodes: Node[] = [];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const seedNodes = () => {
      const cols = 8;
      const rows = Math.ceil(NODE_COUNT / cols);
      nodes = Array.from({ length: NODE_COUNT }, (_, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        
        // Distribute nicely with organic offsets
        const jitterX = (Math.random() - 0.5) * (width / cols) * 0.5;
        const jitterY = (Math.random() - 0.5) * (height / rows) * 0.5;
        const anchorX = Math.max(20, Math.min(width - 20, ((col + 0.5) / cols) * width + jitterX));
        const anchorY = Math.max(20, Math.min(height - 20, ((row + 0.5) / rows) * height + jitterY));

        return {
          x: anchorX,
          y: anchorY,
          vx: 0,
          vy: 0,
          anchorX,
          anchorY,
          phase: index * 0.53 + Math.random() * 2,
          radius: 1.5 + Math.random() * 1.2,
          alpha: 0.35 + Math.random() * 0.45, // Between 0.35 and 0.8 opacity
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const onPointerLeave = () => {
      pointerRef.current.active = false;
      pointerRef.current.x = -1000;
      pointerRef.current.y = -1000;
    };

    const tick = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.033);
      lastTime = time;

      context.clearRect(0, 0, width, height);

      const pointer = pointerRef.current;
      const spring = 16;
      const damping = 0.86;

      nodes.forEach((node) => {
        // Natural harmonic wave oscillation
        const targetX = node.anchorX + Math.cos(time * 0.0008 + node.phase) * 18;
        const targetY = node.anchorY + Math.sin(time * 0.0011 + node.phase) * 14;
        let ax = (targetX - node.x) * spring;
        let ay = (targetY - node.y) * spring;

        // Interactive cursor spring pull
        if (pointer.active) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const distanceSq = Math.max(dx * dx + dy * dy, 1200);
          
          if (distanceSq < 50000) {
            const pull = Math.min(65000 / distanceSq, 26);
            ax += dx * pull;
            ay += dy * pull;
          }
        }

        node.vx = (node.vx + ax * dt) * damping;
        node.vy = (node.vy + ay * dt) * damping;
        node.x += node.vx * dt * 60;
        node.y += node.vy * dt * 60;

        // Render yellow dot with soft glow
        context.fillStyle = `rgba(227, 177, 64, ${node.alpha})`;
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
      });

      if (!reduceMotion) {
        frame = requestAnimationFrame(tick);
      }
    };

    resize();
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}
