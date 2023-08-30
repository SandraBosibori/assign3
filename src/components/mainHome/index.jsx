import Search from '../search'
import styles from './mainHome.module.css'

const MainHome=()=>{
    return(
        <div className={styles.all}>
        <div className={styles.main}>
            <div className={styles.text}>
                <h1>Make your life easier by getting your errands done for you!</h1>
            </div>
            <div className={styles.search}>
                <Search/>
            </div>

        </div>
        <div className={styles.second}>
            <div className={styles.image}></div>
            <div className={styles.words}>
                <h1>Get different types of errands run for you</h1>
                <h2>From everyday tasks such as shopping and delivery to more specialized tasks such as 
                    </h2><h2>writing emails
                    and driving, assign has you covered.
                </h2>
            </div>
        </div>
        <div className={styles.third}>
            <div className={styles.words}>
                <h1>Choose an assignee to run your errand for you</h1>
                <h2>Delegate your tasks with ease. Select an assignee to take care of your errands 
                    </h2><h2>on your behalf.</h2>
            </div>
            <div className={styles.image}></div>
           
        </div>
        <div className={styles.fourth}>
            <div className={styles.image}></div>
            <div className={styles.words}>
                <h1>Don't forget any task, write it down</h1>
                <h2>Stay organized and never miss a task. Jot down all your to-dos to
                    </h2><h2> keep track of everything.</h2>
            </div>
        </div>
        
        
        </div>
    )
}
export default MainHome