"use client";

import styles from "../../page.module.css";

const SkillNodeComponent = ({skillName}) => {

    return (

        <div className={styles.SkillNodeContainer}>

            <button className={styles.SkillNodeBtn}></button>

            <div className={styles.SkillName}>{skillName}</div>

        </div>

    )
}

export default SkillNodeComponent;