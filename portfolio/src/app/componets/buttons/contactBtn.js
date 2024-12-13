import styles from "../../page.module.css";


const ContactBtnComponent = () => {

    const showContacts = () => {

    }

    return (
        <div className={styles.button}>
            <button 
                className={styles.button}
                onClick={showContacts()}
            >Contact</button>
        </div>
    )
}

export default ContactBtnComponent;