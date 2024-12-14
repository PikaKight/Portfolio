import styles from "../../page.module.css";


const AboutBtnComponent = ({onClickBtn}) => {
    const showAbout = () => {
        onClickBtn('about')
    }
    
    return (
        <div className={styles.button}>
            <button 
                className={styles.button}
                onClick={showAbout}
            >About Me</button>
        </div>
    )
}

export default AboutBtnComponent;