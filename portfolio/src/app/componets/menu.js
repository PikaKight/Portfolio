import styles from "../page.module.css";

import Image from 'next/image';

import logo from '@/../public/images/MTXX.jpg';

import HomeBtnComponent from "./buttons/homeBtn";
import AboutBtnComponent from "./buttons/aboutBtn";
import ProjectBtnComponent from "./buttons/projectBtn";
import ContactBtnComponent from "./buttons/contactBtn";

const MenuComponent = () => {

    return (

        <div className={styles.menu}>
            <div className={styles.logo}>
                <Image
                    className={styles.logoImage}
                    src={logo}
                    alt="Image of Marcus Tuen Muk"
                />
            </div>

            <div className={styles.title}>
            <h2>Marcus Tuen Muk</h2>
                <br></br>
            <h3>Western University <br></br> Software Engineering Student</h3>
            </div>

            <HomeBtnComponent/>

            <AboutBtnComponent/>

            <ProjectBtnComponent/>

            <ContactBtnComponent/>

      </div>
        
    )

}

export default MenuComponent;