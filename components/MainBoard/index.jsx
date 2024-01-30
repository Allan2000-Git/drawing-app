"use client"

import { actionMenuItemClick } from '@/slice/menuBarSlice';
import { menuItems } from '@/utils/constants';
import { socket } from '@/utils/socket';
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const MainBoard = () => {
    const canvasRef = useRef(null);
    const shouldDraw = useRef(false);
    const historyArray = useRef([]);
    const pointer = useRef(0);

    const {activeMenuItem, actionMenuItem} = useSelector(state => state.menu);
    const {strokeColor, brushSize} = useSelector(state => state.toolbox[activeMenuItem]);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");

        if(actionMenuItem === menuItems.Download){
            const URL = canvasRef.current.toDataURL();
            const link = document.createElement("a");
            link.href = URL;
            link.download = "draw.png";
            link.click();
        } else if(actionMenuItem === menuItems.Undo){
            if(pointer.current > 0){
                pointer.current -= 1;
            }
            const image = historyArray.current[pointer.current];
            ctx.putImageData(image,0,0);
        } else if(actionMenuItem === menuItems.Redo){
            if(pointer.current < historyArray.current.length - 1){
                pointer.current += 1;
            }
            const image = historyArray.current[pointer.current];
            ctx.putImageData(image,0,0);
        }

        dispatch(actionMenuItemClick(null));

    },[actionMenuItem])

    // runs after paint
    useEffect(() => {
        if(!canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");

        // set stroke color and brush size
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = brushSize;

    },[strokeColor, brushSize]);

    // runs before useEffect; runs before painting
    useLayoutEffect(() => {
        if(!canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");

        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        canvasRef.current.style.backgroundColor = "white";

        // drawing on canvas
        const startDraw = (x, y) => {
            ctx.beginPath(); 
            ctx.moveTo(x, y); 
        }
        
        const endDraw = (x, y) => {
            ctx.lineTo(x, y); 
            ctx.stroke(); 
        }

        const startPainting = (event) => {
            shouldDraw.current = true;
            startDraw(event.clientX, event.clientY); 
        }

        const stopPainting = () => {
            shouldDraw.current = false;
            const image = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
            historyArray.current.push(image);
            pointer.current = historyArray.current.length-1;
        }

        const sketch = (event) => {
            if(shouldDraw.current === false){
                return;
            }
            endDraw(event.clientX, event.clientY);
        }

        canvasRef.current.addEventListener('mousedown', startPainting); 
        canvasRef.current.addEventListener('mouseup', stopPainting); 
        canvasRef.current.addEventListener('mousemove', sketch);
        
        socket.on("connect", () => {
            console.log("client connected with id: ",socket.id);
        });

        return () => {
            canvasRef.current.removeEventListener('mousedown', startPainting); 
            canvasRef.current.removeEventListener('mouseup', stopPainting); 
            canvasRef.current.removeEventListener('mousemove', sketch); 
        }

    },[]);

    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    )
}

export default MainBoard