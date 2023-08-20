import styles from './front.module.css'




const Front=()=>{
    return(
        <>
            <section className={styles.full}>
                <p>Get different types of errands run for you!</p>
                <div className={styles.one}>
                    
                    <div className={styles.outer}><div className={styles.preview}></div></div>
                    <div className={styles.outer}><div className={styles.preview}></div></div>
                    <div className={styles.outer}><div className={styles.preview}></div></div>
                </div>
                <p>Choose an assignee to run your errand</p>
                <div className={styles.two}>
                    <div className={styles.outer}><div className={styles.preview}></div></div>
                    <div className={styles.outer}><div className={styles.preview}></div></div>
                    <div className={styles.outer}><div className={styles.preview}></div></div>
                </div>
                <p>Select specific shops</p>
                <div className={styles.three}>
                    <div className={styles.outer}><div className={styles.preview}></div></div>
                    <div className={styles.outer}><div className={styles.preview}></div></div>
                    <div className={styles.outer}><div className={styles.preview}></div></div>
                </div>
                
            </section>

            
            
        </>
        
    )
}
export default Front