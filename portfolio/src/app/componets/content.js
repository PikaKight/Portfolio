"use client";

import styles from "../page.module.css";
import AboutComponent from "./contentComponets/about";
import ContactComponent from "./contentComponets/contact";
import HomeComponent from "./contentComponets/home";
import ProjectComponent from "./contentComponets/projects";


const ContentComponent = ({activePage}) => {

    return (

        <div className={styles.contentContainer}>   
            {activePage == "home" && <HomeComponent/>}
            {activePage == "about" && <AboutComponent/>}
            {activePage == "projects" && <ProjectComponent/>}
            {activePage == "contact" && <ContactComponent/>}
      </div>
        
    )

}

export default ContentComponent;