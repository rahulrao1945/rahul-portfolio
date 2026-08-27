import { useEffect, useRef } from "react";

// Signature visual: a drifting neural-network graph — layered nodes with
// pulses traveling along edges, evoking a forward pass through a network.
// Purely decorative, sits behind the hero content, respects reduced-motion.
export default function NeuralField({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width, height, dpr;
    let layers = [];
    let pulses = [];
    let raf;

    const LAYER_COUNT = 5;
    const AMBER = "255, 180, 84";
    const CYAN = "62, 217, 192";

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildLayers();
    }

    function buildLayers() {
      layers = [];
      for (let l = 0; l < LAYER_COUNT; l++) {
        const nodeCount = l === 0 || l === LAYER_COUNT - 1 ? 4 : 6;
        const nodes = [];
        for (let n = 0; n < nodeCount; n++) {
          nodes.push({
            x: (width / (LAYER_COUNT - 1)) * l,
            y: (height / (nodeCount + 1)) * (n + 1),
            baseY: (height / (nodeCount + 1)) * (n + 1),
            phase: Math.random() * Math.PI * 2,
          });
        }
        layers.push(nodes);
      }
    }

    function spawnPulse() {
      if (layers.length < 2) return;
      const fromLayer = Math.floor(Math.random() * (LAYER_COUNT - 1));
      const from =
        layers[fromLayer][Math.floor(Math.random() * layers[fromLayer].length)];
      const toLayerNodes = layers[fromLayer + 1];
      const to = toLayerNodes[Math.floor(Math.random() * toLayerNodes.length)];
      pulses.push({
        from,
        to,
        t: 0,
        speed: 0.006 + Math.random() * 0.006,
        color: Math.random() > 0.5 ? AMBER : CYAN,
      });
    }

    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, width, height);

      // gentle vertical drift per node
      layers.forEach((nodes) => {
        nodes.forEach((n) => {
          n.y = n.baseY + Math.sin(frame * 0.006 + n.phase) * 6;
        });
      });

      // edges
      ctx.lineWidth = 1;
      for (let l = 0; l < layers.length - 1; l++) {
        layers[l].forEach((a) => {
          layers[l + 1].forEach((b) => {
            ctx.strokeStyle = "rgba(255,255,255,0.045)";
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          });
        });
      }

      // pulses traveling along edges
      if (!prefersReduced && frame % 22 === 0 && pulses.length < 26) {
        spawnPulse();
      }
      pulses = pulses.filter((p) => p.t <= 1);
      pulses.forEach((p) => {
        p.t += p.speed;
        const x = p.from.x + (p.to.x - p.from.x) * p.t;
        const y = p.from.y + (p.to.y - p.from.y) * p.t;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${1 - p.t * 0.3})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // nodes
      layers.forEach((nodes, li) => {
        nodes.forEach((n) => {
          const isEdgeLayer = li === 0 || li === layers.length - 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, isEdgeLayer ? 3.4 : 2.6, 0, Math.PI * 2);
          ctx.fillStyle = isEdgeLayer
            ? "rgba(255,180,84,0.55)"
            : "rgba(255,255,255,0.22)";
          ctx.fill();
        });
      });

      frame++;
      if (!prefersReduced) {
        raf = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
