import styles from "../../page.module.css";


const ContactBtnComponent = ({onClickBtn}) => {

    const showContacts = () => {
        onClickBtn('contact')
    }

    return (
        <div className={styles.button}>
            <button 
                className={styles.button}
                onClick={showContacts}
            >Contact</button>
        </div>
    )
}

export default ContactBtnComponent;