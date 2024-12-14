import styles from "../../page.module.css";


const HomeBtnComponent = ({onClickBtn}) => {
    const showHome = () => {
        onClickBtn("home")
    }
    
    return (
        <div className={styles.button}>
            <button 
                className={styles.button}
                onClick={showHome}
            >Home</button>
        </div>
    )
}

export default HomeBtnComponent;