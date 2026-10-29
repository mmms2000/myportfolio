import { useEffect, useRef, useState } from "react";

const RADIUS = 170; // cursor's reach: stars inside it glow, scatter and link up
const LINK = 150; // max distance between two stars for a constellation line
const PARALLAX = 60; // px the closest stars drift as the cursor crosses the screen

// ponytail: one canvas instead of ~150 star divs - moving every div each frame for
// parallax/repel would thrash layout. Meteors stay as divs, they're CSS-animated.
export const StarBackground = () => {
  const canvasRef = useRef(null);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateMeteors();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // ThemeToggle reloads the page, so reading the theme colour once is enough
    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();
    const accent = (a) => `hsl(${primary} / ${a})`;

    let w = 0;
    let h = 0;
    let stars = [];
    let frame = 0;
    const pointer = { x: -1e4, y: -1e4, active: false, sx: 0, sy: 0 }; // sx/sy: eased parallax
    const pulses = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: Math.floor((w * h) / 10000) }, () => {
        const z = Math.random() * 0.8 + 0.2; // depth: 1 = nearest, moves most
        return {
          x: Math.random() * (w + PARALLAX * 2) - PARALLAX, // overscan so drift never shows an empty edge
          y: Math.random() * h,
          z,
          r: 0.5 + z * 1.5,
          a: Math.random() * 0.5 + 0.5,
          t: Math.random() * Math.PI * 2,
        };
      });
    };

    const draw = (now) => {
      ctx.clearRect(0, 0, w, h);

      const tx = pointer.active ? pointer.x / w - 0.5 : 0;
      const ty = pointer.active ? pointer.y / h - 0.5 : 0;
      pointer.sx += (tx - pointer.sx) * 0.05;
      pointer.sy += (ty - pointer.sy) * 0.05;
      const scroll = window.scrollY;

      for (const p of pulses) {
        p.r += 7;
        p.life -= 0.012;
      }
      while (pulses.length && pulses[0].life <= 0) pulses.shift();

      // cursor glow
      if (pointer.active) {
        const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, RADIUS);
        g.addColorStop(0, accent(0.16));
        g.addColorStop(1, accent(0));
        ctx.fillStyle = g;
        ctx.fillRect(pointer.x - RADIUS, pointer.y - RADIUS, RADIUS * 2, RADIUS * 2);
      }

      const near = [];
      for (const s of stars) {
        let x = s.x - pointer.sx * PARALLAX * s.z;
        let y = (((s.y - scroll * 0.15 * s.z) % h) + h) % h - pointer.sy * PARALLAX * s.z;
        let glow = 0;

        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const d = Math.hypot(dx, dy) || 1;
        if (d < RADIUS) {
          glow = 1 - d / RADIUS;
          const push = glow * glow * 26 * s.z;
          x += (dx / d) * push;
          y += (dy / d) * push;
        }

        // click shockwave: stars riding the ring get kicked outward and light up
        for (const p of pulses) {
          const px = x - p.x;
          const py = y - p.y;
          const pd = Math.hypot(px, py) || 1;
          const band = 1 - Math.abs(pd - p.r) / 50;
          if (band > 0) {
            x += (px / pd) * band * 18 * p.life;
            y += (py / pd) * band * 18 * p.life;
            glow = Math.max(glow, band * p.life);
          }
        }

        const twinkle = 0.75 + 0.25 * Math.sin(now * 0.0015 + s.t);
        ctx.globalAlpha = Math.min(1, s.a * twinkle);
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (glow > 0.02) {
          ctx.globalAlpha = 1;
          ctx.fillStyle = accent(glow);
          ctx.beginPath();
          ctx.arc(x, y, s.r * (1 + glow * 1.5), 0, Math.PI * 2);
          ctx.fill();
          if (glow > 0.15) near.push({ x, y, glow });
        }
      }

      // constellation: link lit stars that sit close to each other
      ctx.globalAlpha = 1;
      ctx.lineWidth = 1;
      for (let i = 0; i < near.length; i++) {
        for (let j = i + 1; j < near.length; j++) {
          const a = near[i];
          const b = near[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = accent((1 - d / LINK) * Math.min(a.glow, b.glow) * 0.9);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of pulses) {
        ctx.strokeStyle = accent(p.life * 0.5);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      if (!still) frame = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      if (still) draw(0);
    };
    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = pointer.y = -1e4;
    };
    const onDown = (e) => pulses.push({ x: e.clientX, y: e.clientY, r: 0, life: 1 });

    resize();
    window.addEventListener("resize", onResize);
    if (still) {
      draw(0); // reduced motion: static starfield, no tracking
    } else {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerdown", onDown);
      document.documentElement.addEventListener("pointerleave", onLeave);
      frame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const generateMeteors = () => {
    const numberOfMeteors = 6;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor "
          // ponytail: new random spot each loop straight on the node - no state, no re-render
          onAnimationIteration={(e) => {
            e.currentTarget.style.left = Math.random() * 100 + "%";
            e.currentTarget.style.top = Math.random() * 40 + "%";
          }}
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            // negative delay = already mid-flight on load; a positive one left them parked, unrotated
            animationDelay: -meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
