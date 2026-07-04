"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero shader — ported from inspiration/animations/shader_animation.html.
 * Renders an animated thin-line interference pattern on black via a Three.js
 * ShaderMaterial. Client-only; cleans up its render loop and GL context on unmount.
 */
export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `;

    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
          }
        }

        gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
      }
    `;

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // Cap pixel ratio for performance on high-DPI displays.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.resolution.value.x = renderer.domElement.width;
      uniforms.resolution.value.y = renderer.domElement.height;
    };

    onResize();
    window.addEventListener("resize", onResize, false);

    let animationId = 0;
    let running = false;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      uniforms.time.value += 0.05;
      renderer.render(scene, camera);
    };

    // Only render while the hero is actually on screen — saves GPU/battery
    // once the visitor has scrolled past it.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        animate();
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(animationId);
      }
    });
    observer.observe(container);

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      cancelAnimationFrame(animationId);
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="h-full w-full"
      style={{ background: "#000", overflow: "hidden" }}
    />
  );
}
