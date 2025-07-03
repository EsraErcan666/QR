import React, { useEffect, useState } from 'react';
import '../css/CursorTrail.css'; // CSS'yi çağırmayı unutma

const CursorTrail = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setCoords({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div
            className="cursor-glow"
            style={{
                left: `${coords.x}px`,
                top: `${coords.y}px`,
            }}
        ></div>
    );
};

export default CursorTrail;