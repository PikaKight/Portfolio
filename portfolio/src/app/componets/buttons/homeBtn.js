import styles from "../../page.module.css";


const HomeBtnComponent = () => {
    const showHome = () => {

    }
    
    return (
        <div className={styles.button}>
            <button 
                className={styles.button}
                onClick={showHome()}
            >Home</button>
        </div>
    )
}

export default HomeBtnComponent;