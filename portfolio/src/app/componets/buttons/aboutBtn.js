import styles from "../../page.module.css";


const AboutBtnComponent = () => {
    const showAbout = () => {

    }
    
    return (
        <div className={styles.button}>
            <button 
                className={styles.button}
                onClick={showAbout()}
            >About Me</button>
        </div>
    )
}

export default AboutBtnComponent;