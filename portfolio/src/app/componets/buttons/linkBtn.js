"use client";

import styles from "../../page.module.css";
import Image from 'next/image';


const LinkBtnComponent = ({imgSrc, altText, redirectUrl}) => {

    const handleClick = () => {
        window.location.href = redirectUrl;
    }

    return (

        <button 
                    className={styles.linkBtn}
                    onClick={handleClick}
        >
            <Image
                className={styles.linkLogo}
                src = {imgSrc}
                alt={altText}
            />
        </button>
        
    )

}

export default LinkBtnComponent;