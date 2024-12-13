"use client";

import styles from "../../page.module.css";

import Image from 'next/image';
import LinkBtnComponent from "../buttons/linkBtn";

import github from "@/../public/images/github.png"
import linkedin from "@/../public/images/linkedin.png"
import twitch from "@/../public/images/twitch.png"
import youtube from "@/../public/images/youtube.png"


const HomeComponent = () => {

    const handleClick = (url) => {
        window.location.href = url;
    }

    return (

        <div>
            <div className={styles.heroBanner}>
                <h1>Marcus Tuen Muk</h1>
            </div>

            <div className={styles.linkContainer}>
                <LinkBtnComponent
                    imgSrc={github}
                    altText="Github Profile Link"
                    redirectUrl="https://github.com/pikakight"
                />

                <LinkBtnComponent
                    imgSrc={linkedin}
                    altText="LinkedIn Profile Link"
                    redirectUrl="https://www.linkedin.com/in/marcus-tuen-muk/"
                />

                <LinkBtnComponent
                    imgSrc={youtube}
                    altText="YouTube Channel Link"
                    redirectUrl="https://www.youtube.com/@PikaKight"
                />

                <LinkBtnComponent
                    imgSrc={twitch}
                    altText="Twitch Channel Link"
                    redirectUrl="https://www.twitch.tv/pikakight"
                />
                
            </div>

      </div>
        
    )

}

export default HomeComponent;