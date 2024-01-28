"use client"

import React from 'react'
import { FaPencil, FaDownload } from "react-icons/fa6";
import { FaUndoAlt, FaRedoAlt, FaEraser } from "react-icons/fa";
import styles from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { menuItems } from '@/utils/constants';
import { activeMenuItemClick, actionMenuItemClick } from '@/slice/menuBarSlice';
import classNames from 'classnames';

const MenuBar = () => {
    const activeMenuItem = useSelector(state => state.menu.activeMenuItem);
    const dispatch = useDispatch()

    const handleActiveMenuItemClick = (item) => {
        dispatch(activeMenuItemClick(item));
    }

    const handleActionMenuItemClick = (item) => {
        dispatch(actionMenuItemClick(item));
    }

    return (
        <div className={styles.menuWrapper}>
            <div className={classNames(styles.iconWrapper, {
                [styles.active]:activeMenuItem === menuItems.Pencil
            })} onClick={() => handleActiveMenuItemClick(menuItems.Pencil)}>
                <FaPencil className={styles.icon} />
            </div>
            <div className={classNames(styles.iconWrapper, {
                [styles.active]:activeMenuItem === menuItems.Eraser
            })} onClick={() => handleActiveMenuItemClick(menuItems.Eraser)}>
                <FaEraser className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FaUndoAlt className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FaRedoAlt className={styles.icon} />
            </div>
            <div className={styles.iconWrapper}>
                <FaDownload className={styles.icon} />
            </div>
        </div>
    )
}

export default MenuBar