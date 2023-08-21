import styles from './topmost.module.css'
import assign from '../../assets/assign.png'
import Auth from '../../auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'


const TopMost=()=>{
    
    return(
        <>
            <div className={styles.top}>
                <div className={styles.images}>
                    <img className={styles.image} src={assign} alt="logo"/>
                    <Link to='./authen'><FontAwesomeIcon icon={faUser} size='2xl' /></Link>
                    
                    
                </div>
                
            
                
            </div>
        </>
    )
}
export default TopMost

{/* <FontAwesomeIcon icon={faUser} size="xl" /> */}