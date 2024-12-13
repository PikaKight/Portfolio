import styles from "../../page.module.css";

const ProjectBtnComponent = () => {
    const showProjects = () => {

    }
    
    return (
        <div className={styles.button}>
            <button 
                className={styles.button}
                onClick={showProjects()}
            >Projects</button>
        </div>
    )
}

export default ProjectBtnComponent;