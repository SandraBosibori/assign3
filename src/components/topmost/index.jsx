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
                        <img className={styles.image} src={assign} alt="logo"/>
                    </div>
                    <div className={styles.link}>
                        <Link to='/login'><FontAwesomeIcon icon={faUser} size='2xl' /></Link>
                    </div>
                    
                    
                    
                    
                </div>
                
            
                
            </div>
        </>
    )
}
export default TopMost

{/* <FontAwesomeIcon icon={faUser} size="xl" /> */}