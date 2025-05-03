"use client";

import styles from "../../page.module.css";
import SkillNodeComponent from "../skillComponent/skillNode";

const SkillsComponent = () => {

    return (

        <div className={styles.BioContainer}>

            <h1>Skills & Tools</h1>

            <div className={styles.SkillContainer}>
            
                <SkillNodeComponent
                   skillName={"Software Development"}
                />

            </div>

        </div>

    )
}

export default SkillsComponent;