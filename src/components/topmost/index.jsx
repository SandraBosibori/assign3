import styles from './topmost.module.css'
import assign from '../../assets/assign.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'


const TopMost=()=>{
    
    return(
        <>
            <div className={styles.top}>
                <div className={styles.images}>
                    <div>
                        <Link to='/'><img className={styles.image} src={assign} alt="logo"/></Link>
                    </div>
                    <div className={styles.signing}>
                        <Link to="/sajili" ><button className={styles.button}>Sign Up</button></Link>
                        <button className={styles.button}>Login</button>
                    </div>
                    
                    
                    
                    
                </div>
                
            
                
            </div>
        </>
    )
}
export default TopMost

{/* <FontAwesomeIcon icon={faUser} size="xl" /> */}