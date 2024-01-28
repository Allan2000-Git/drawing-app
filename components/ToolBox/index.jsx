"use client"

import React from 'react'
import styles from "./index.module.css";
import { colors, menuItems } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { changeBrushSize, changeStrokeColor } from '@/slice/toolBoxSlice';
import classNames from 'classnames';

const ToolBox = () => {
    const activeMenuItem = useSelector(state => state.menu.activeMenuItem);
    const showStrokeColor = activeMenuItem === menuItems.Pencil;
    const showBrush = activeMenuItem === menuItems.Pencil || activeMenuItem === menuItems.Eraser;

    const dispatch = useDispatch();
    const {strokeColor, brushSize} = useSelector(state => state.toolbox[activeMenuItem]);

    const handleStrokeColor = (color) => {
        dispatch(changeStrokeColor({
            item:activeMenuItem,
            strokeColor: color
        }));
    }

    const handleBrushSize = (e) => {
        dispatch(changeBrushSize({
            item:activeMenuItem,
            brushSize: e.target.value
        }));
    }

    return (
        <div className={styles.toolBoxWrapper}>
            {
                showStrokeColor && 
                <div className={styles.toolItem}>
                    <p className={styles.toolBoxHeading}>Stroke Color</p>
                    <div className={styles.colorWrapper}>
                        <div onClick={() => handleStrokeColor(colors.Blue)} 
                            className={classNames(styles.color, {
                                [styles.active]:strokeColor === colors.Blue})} 
                            style={{backgroundColor:colors.Blue}} />
                        <div onClick={() => handleStrokeColor(colors.Green)} 
                            className={classNames(styles.color, {
                                [styles.active]:strokeColor === colors.Green})}  
                            style={{backgroundColor:colors.Green}} />
                        <div onClick={() => handleStrokeColor(colors.Indigo)}
                            className={classNames(styles.color, {
                                [styles.active]:strokeColor === colors.Indigo})} 
                            style={{backgroundColor:colors.Indigo}} />
                        <div onClick={() => handleStrokeColor(colors.Orange)}
                            className={classNames(styles.color, {
                                [styles.active]:strokeColor === colors.Orange})}
                            style={{backgroundColor:colors.Orange}} />
                        <div onClick={() => handleStrokeColor(colors.Red)}
                            className={classNames(styles.color, {
                                [styles.active]:strokeColor === colors.Red})} 
                            style={{backgroundColor:colors.Red}} />
                        <div onClick={() => handleStrokeColor(colors.Violet)}
                            className={classNames(styles.color, {
                                [styles.active]:strokeColor === colors.Violet})} 
                            style={{backgroundColor:colors.Violet}} />
                        <div onClick={() => handleStrokeColor(colors.Yellow)}
                            className={classNames(styles.color, {
                                [styles.active]:strokeColor === colors.Yellow})}
                            style={{backgroundColor:colors.Yellow}} />
                        <div onClick={() => handleStrokeColor(colors.BlacK)}
                            className={classNames(styles.color, {
                                [styles.active]:strokeColor === colors.BlacK})} 
                            style={{backgroundColor:colors.BlacK}} />
                        {/* <div className={styles.color} style={{backgroundColor:colors.White}} /> */}
                    </div>
                </div>
            }
            {
                showBrush && 
                <div className={styles.toolItem}>
                    <p className={styles.toolBoxHeading}>Brush Size {activeMenuItem} </p>
                    <input onChange={handleBrushSize} type="range" min={1} max={10} step={1} className="mt-4" />
                </div>
            }
        </div>
    )
}

export default ToolBox