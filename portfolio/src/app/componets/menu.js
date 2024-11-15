import styles from "../page.module.css";

import Image from 'next/image';

import logo from '@/../public/images/MTXX.jpg';

import HomeBtnComponent from "./buttons/homeBtn";

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

      </div>
        
    )

}

export default MenuComponent;