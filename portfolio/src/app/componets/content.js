"use client";

import styles from "../page.module.css";
import HomeComponent from "./contentComponets/home";


const ContentComponent = () => {

    return (

        <div className={styles.contentContainer}>
            <HomeComponent/>
            
      </div>
        
    )

}

export default ContentComponent;