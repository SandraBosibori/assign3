import styles from './mainHome.module.css'
import assign from '../../assets/assign.png'
import tasksshot from '../../assets/tasksshot.png'
import shopping from '../../assets/bags.png'
import delivery from '../../assets/delivery.png'
import driving from '../../assets/driving.png'
import banking from '../../assets/banking.png'
import writing from '../../assets/writing.png'
import { Link } from 'react-router-dom'
import background from '../../assets/background.jpeg'
import taskimage from '../../assets/taskimage.png'
import waves from '../../assets/waves.png'

const MainHome=()=>{
    return(
        <div className={styles.all}>
        <div className={styles.main}>
            <div className={styles.middle}>
                <div className={styles.top}>
                    <div className={styles.back}><img className={styles.im}  src={background} alt='background'/></div>
                    <div className={styles.text}>
                        <h1>Make Your Life Easier. Get Your Errands Run For You!</h1>
                        <h2>Stay organized, reduce stress, and boost productivity using assign.</h2>
                        <h2>Make the most out of your days by delegating tasks,whether they are</h2>
                        <h2>simple everyday tasks such as shopping or more specialized tasks such</h2>
                        <h2>as banking</h2>
                       
                    </div>
                    <div className={styles.text2}>
                        <Link to='/sajili'><button className={styles.btn}>GET STARTED</button></Link>

                    </div>
                </div> 
                <div className={styles.bottom}>
                <div className={styles.one}>
                    <img className={styles.shop} src={shopping} alt='shopping'/>
                    
                </div>
                <div className={styles.two}>
                    <h3>Get the most out of your days</h3>
                </div>
                <div className={styles.three}>
                <img className={styles.task} src={taskimage} alt='taskimage'/>
                </div>
                <div className={styles.four}>
                    <h3>Increase your productivity</h3>
                </div>
                <div className={styles.five}>
                    <img className={styles.write} src={driving} alt='writing'/>
                </div>
                </div>
            </div>
                

           
        </div>
        <div className={styles.second}>
            <div className={styles.image}>
                <div><img className={styles.pic} src={delivery} alt='delivery'/></div>
                <div><img className={styles.pic} src={writing} alt='writing'/></div>
                <div><img className={styles.pic} src={shopping} alt='shopping'/></div>
                <div><img className={styles.pic} src={banking} alt='banking'/></div>
            </div>
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
            <div className={styles.image}><img className={styles.tasksshot} src={tasksshot} alt='tasksshot'/></div>
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