import React, { useEffect, useRef } from "react";

export const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    const fontSize = 16;
    const columns = Math.floor(W / fontSize);
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops.push(0);
    }
    const str = "JavaScript Hacking Effect";

    function draw() {
      context.fillStyle = "rgba(0,0,0,.05)";
      context.fillRect(0, 0, W, H);
      context.font = "700 " + fontSize + "px matrix";
      context.fillStyle = "#35006e"; //#00cc33
      for (let i = 0; i < columns; i++) {
        const index = Math.floor(Math.random() * str.length);
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    // Handle resize
    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset overflow-hidden pointer-events-none w-full h-full z-[-1]">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};
