import styles from "../../page.module.css";


const BioBtnComponent = ({onClickBtn, content}) => {
    const showAbout = () => {
        onClickBtn(content)
    }
    
    return (
        <div className={styles.button}>
            <button 
                className={styles.button}
                onClick={showAbout}
            >{content}</button>
        </div>
    )
}

export default BioBtnComponent;