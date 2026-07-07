"use client";

import { useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function Knot({ scrollProgress }: { scrollProgress: RefObject<number> }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const progress = scrollProgress.current;
    const targetRotX = state.pointer.y * 0.25;
    const targetRotY = state.pointer.x * 0.35;

    mesh.rotation.x += (targetRotX - mesh.rotation.x) * 0.04;
    mesh.rotation.y += delta * 0.15 + (targetRotY - mesh.rotation.y) * 0.04;
    mesh.rotation.z = progress * 0.5;
    mesh.position.y = -progress * 0.8;

    const scale = 1 - progress * 0.15;
    mesh.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.15, 0.34, 220, 32, 2, 3]} />
      <meshPhysicalMaterial
        color="#00A8D8"
        roughness={0.15}
        metalness={0.75}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        emissive="#003A60"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export default function HeroScene({
  scrollProgress,
}: {
  scrollProgress: RefObject<number>;
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} color="#0D1A3A" />
      <directionalLight position={[4, 5, 4]} intensity={2.0} color="#80D8FF" />
      <pointLight position={[-4, -2, -3]} intensity={2.5} color="#00C8FF" />
      <pointLight position={[3, -3, 2]} intensity={1.0} color="#F5A623" />
      <Knot scrollProgress={scrollProgress} />
    </Canvas>
  );
}
