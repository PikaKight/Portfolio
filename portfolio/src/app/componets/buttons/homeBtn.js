import styles from "../../page.module.css";


const HomeBtnComponent = () => {
    return (
        <div className={styles.button}>
            <button 
                className={styles.button}
                onClick={console.log("hi")}
            >Home</button>
        </div>
    )
}

export default HomeBtnComponent;