import { Link } from 'react-router-dom'
import styles from './nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'





const Nav=()=>{
    return(
        <>
            <div className={styles.nav}>
                <div className={styles.home}><Link to='/'><FontAwesomeIcon icon={faHouse} bounce />Home</Link></div>
                <div className={styles.about}><FontAwesomeIcon icon={faCircleInfo} bounce />Help</div>
                <div className={styles.notifications}><Link to='/newhome'><FontAwesomeIcon icon={faBell} bounce />Notifications</Link></div>
                <div className={styles.assignee}><Link to='/newAssignee'><FontAwesomeIcon icon={faBriefcase} bounce />Assignee</Link></div>
            </div>
        </>
    )
}
export default Nav