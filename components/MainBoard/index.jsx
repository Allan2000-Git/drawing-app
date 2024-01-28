"use client"

import React, { useEffect, useRef } from 'react'

const MainBoard = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if(!canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
    },[]);

    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    )
}

export default MainBoard