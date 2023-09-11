import styles from './sideNav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const SideNav=()=>{
    const[collapsed, setCollapsed]= useState(false);

    const handleSideNav=()=>{
        setCollapsed(collapsed===true? false: true)
    }
    return(
        <>
            <div className={collapsed ? styles.sideNav: styles.hidden}>
                <div className={styles.services}><Link to='/services'>Services</Link></div>
                <div className={styles.assignees}><Link to='/assignees'>Assignees</Link></div>
                <div className={styles.wallet}><Link to='/wallet'>Wallet</Link></div>
                <div className={styles.history}><Link to='/history'>History</Link></div>
                <div className={styles.todo}><Link to='/todo'>To do List</Link></div>
            </div>
            <div className={styles.arrow}><button className={styles.arr} onClick={handleSideNav}><FontAwesomeIcon icon={faArrowRight} flip /></button></div>
        </>
    )
}
export default SideNav