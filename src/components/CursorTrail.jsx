import React, { useRef, useEffect } from 'react';

const CursorTrail = () => {
    const canvasRef = useRef(null);
    const positions = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const handleMouseMove = (e) => {
            const now = Date.now();
            positions.current.push({
                x: e.clientX,
                y: e.clientY,
                time: now,
            });

            // 👉 Yalnızca son 15 pozisyon tutulur
            if (positions.current.length > 15) {
                positions.current.shift();
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        const draw = () => {
            const now = Date.now();
            const lifeSpan = 3000; // 3 saniye

            positions.current = positions.current.filter(pos => now - pos.time < lifeSpan);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < positions.current.length - 1; i++) {
                const p1 = positions.current[i];
                const p2 = positions.current[i + 1];

                const ageRatio = 1 - (now - p1.time) / lifeSpan;
                const opacity = Math.max(0, ageRatio);

                ctx.strokeStyle = `rgba(144, 238, 144, ${opacity})`; // Fıstık yeşili (light green)
                ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.3})`;
                ctx.shadowBlur = 8;
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }

            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        />
    );
}

export default CursorTrail;
