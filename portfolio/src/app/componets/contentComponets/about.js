"use client";

import styles from "../../page.module.css";

import BioBtnComponent from "../buttons/bioBtn";
import BioComponent from "../aboutComponent/bio";
import SkillsComponent from "../aboutComponent/skills";

import { useState } from "react";

const AboutComponent = () => {

    const [CurrentContent, setContent] = useState("About Me");

    return (

        <div>
            <div className={styles.BioBtnContainer}>
        
                <BioBtnComponent
                    onClickBtn={setContent}
                    content={"About Me"}
                />

                <BioBtnComponent
                    onClickBtn={setContent}
                    content={"Skills"}
                />

                <BioBtnComponent
                    onClickBtn={setContent}
                    content={"Projects"}
                />

                <BioBtnComponent
                    onClickBtn={setContent}
                    content={"Experience"}
                />

            </div>

            {CurrentContent=="About Me" && <BioComponent/>}

            {CurrentContent=="Skills" && <SkillsComponent/>}
        </div>

    )
}

export default AboutComponent;