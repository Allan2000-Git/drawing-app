"use client"

import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const MainBoard = () => {
    const canvasRef = useRef(null);

    const activeMenuItem = useSelector(state => state.menu.activeMenuItem);
    const {strokeColor, brushSize} = useSelector(state => state.toolbox[activeMenuItem]);

    useEffect(() => {
        if(!canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
    },[]);

    console.log(strokeColor, brushSize);

    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    )
}

export default MainBoard