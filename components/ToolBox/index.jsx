"use client"

import React from 'react'
import styles from "./index.module.css";
import { colors, menuItems } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';

const ToolBox = () => {
    const activeMenuItem = useSelector(state => state.menu.activeMenuItem);
    const showStrokeColor = activeMenuItem === menuItems.Pencil;
    const showBrush = activeMenuItem === menuItems.Pencil || activeMenuItem === menuItems.Eraser;

    return (
        <div className={styles.toolBoxWrapper}>
            {
                showStrokeColor && 
                <div className={styles.toolItem}>
                    <p className={styles.toolBoxHeading}>Stroke Color</p>
                    <div className={styles.colorWrapper}>
                        <div className={styles.color} style={{backgroundColor:colors.Blue}} />
                        <div className={styles.color} style={{backgroundColor:colors.Green}} />
                        <div className={styles.color} style={{backgroundColor:colors.Indigo}} />
                        <div className={styles.color} style={{backgroundColor:colors.Orange}} />
                        <div className={styles.color} style={{backgroundColor:colors.Red}} />
                        <div className={styles.color} style={{backgroundColor:colors.Violet}} />
                        <div className={styles.color} style={{backgroundColor:colors.Yellow}} />
                    </div>
                </div>
            }
            {
                showBrush && 
                <div className={styles.toolItem}>
                    <p className={styles.toolBoxHeading}>Brush Size {activeMenuItem} </p>
                    <input type="range" name="size" min={1} max={10} step={1} defaultValue={2} className="mt-4" />
                </div>
            }
        </div>
    )
}

export default ToolBox