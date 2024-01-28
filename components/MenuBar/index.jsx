import React from 'react'
import { FaPencil, FaDownload } from "react-icons/fa6";
import { FaUndoAlt, FaRedoAlt, FaEraser } from "react-icons/fa";
import styles from "./index.module.css";

const items = [
    {
        id:"pencil",
        icon: <FaPencil className={styles.icon} />
    },
    {
        id:"eraser",
        icon: <FaEraser className={styles.icon} />
    },
    {
        id:"undo",
        icon: <FaUndoAlt className={styles.icon} />
    },
    {
        id:"redo",
        icon: <FaRedoAlt className={styles.icon} />
    },
    {
        id:"download",
        icon: <FaDownload className={styles.icon} />
    }
]

const MenuBar = () => {
    return (
        <div className={styles.menuWrapper}>
            {
                items.map(item => (
                    <div key={item.id} className={styles.iconWrapper}>
                        {item.icon}
                    </div>
                ))
            }
        </div>
    )
}

export default MenuBar