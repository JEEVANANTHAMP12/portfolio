import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const animationIdRef = useRef(null);
    const timeRef = useRef(0);
    const renderCountRef = useRef(0);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 50;

        // Renderer setup - optimized for performance
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: false,  // Disable antialias for better performance
            powerPreference: 'high-performance',
            precision: 'lowp'
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));  // Cap DPR for performance
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create particles with MUCH lower count
        const particlesGeometry = new THREE.BufferGeometry();
        const isMobile = window.innerWidth < 768;
        const isLowEndDevice = window.devicePixelRatio > 2;
        const particlesCount = isMobile ? 300 : (isLowEndDevice ? 400 : 600);
        
        const posArray = new Float32Array(particlesCount * 3);
        const colorsArray = new Float32Array(particlesCount * 3);
        const seedArray = new Float32Array(particlesCount);

        // Define color palette
        const colors = [
            new THREE.Color(0x9333ea),
            new THREE.Color(0x3b82f6),
            new THREE.Color(0x06b6d4),
            new THREE.Color(0xec4899),
        ];

        for (let i = 0; i < particlesCount; i++) {
            posArray[i * 3] = (Math.random() - 0.5) * 150;
            posArray[i * 3 + 1] = (Math.random() - 0.5) * 150;
            posArray[i * 3 + 2] = (Math.random() - 0.5) * 100;

            const color = colors[Math.floor(Math.random() * colors.length)];
            colorsArray[i * 3] = color.r;
            colorsArray[i * 3 + 1] = color.g;
            colorsArray[i * 3 + 2] = color.b;
            
            seedArray[i] = Math.random();
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

        // Simple particle material
        const particlesMaterial = new THREE.PointsMaterial({
            size: isMobile ? 0.5 : 0.7,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Mouse interaction with throttling
        const mouse = { x: 0, y: 0 };
        let lastMouseUpdate = 0;
        const handleMouseMove = (event) => {
            const now = Date.now();
            if (now - lastMouseUpdate < 50) return;  // Throttle to 20fps
            lastMouseUpdate = now;
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // Store original positions for efficient animation
        const originalPositions = new Float32Array(posArray);

        // Optimized animation loop with demand-based rendering
        const targetFPS = 30;  // Target 30fps for smoother experience with reduced CPU usage
        const frameDuration = 1000 / targetFPS;
        let lastFrameTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const elapsed = now - lastFrameTime;

            if (elapsed >= frameDuration) {
                lastFrameTime = now - (elapsed % frameDuration);
                timeRef.current += 0.016;

                // Simple rotation only
                particlesMesh.rotation.y = timeRef.current * 0.3;
                particlesMesh.rotation.x = Math.sin(timeRef.current * 0.4) * 0.2;

                // Subtle parallax
                camera.position.x = mouse.x * 3;
                camera.position.y = mouse.y * 3;
                camera.lookAt(scene.position);

                // Only update particles every 3 frames to reduce calculations
                if (renderCountRef.current % 3 === 0) {
                    const positions = particlesGeometry.attributes.position.array;
                    for (let i = 0; i < particlesCount; i++) {
                        const i3 = i * 3;
                        const seed = seedArray[i];
                        
                        // Very subtle wave motion
                        positions[i3 + 1] = originalPositions[i3 + 1] + Math.sin(timeRef.current + seed * 6.28) * 1.5;
                        positions[i3 + 2] = originalPositions[i3 + 2] + Math.cos(timeRef.current * 0.7 + seed * 6.28) * 1;
                    }
                    particlesGeometry.attributes.position.needsUpdate = true;
                }

                renderer.render(scene, camera);
                renderCountRef.current++;
            }

            animationIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize, { passive: true });

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
            if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="fixed inset-0 -z-10"
            style={{ 
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

export default ThreeBackground;
