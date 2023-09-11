import MainAssignees from '../mainAssignees'
import styles from './front.module.css'
import { useState, useEffect } from 'react'
import taskImage from '../../assets/taskimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import user from '../../assets/user.png'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Front=()=>{
    const [assignees, setAssignes] = useState([])
    const fetchAssignees = async ()=>{
        const response = await fetch("https://assigndata.onrender.com/")
        const data = await response.json()
        console.log(data)
        setAssignes(data)
      }
    
      
      useEffect (()=>{
        fetchAssignees()
        
      }, [])
    return(
        <>
            <section className={styles.full}>
                <div className={styles.upper}>
                    <div className={styles.one}>
                        <h2>So many tasks that you can get help with</h2>
                        <Link to='/services'><p>View tasks<FontAwesomeIcon icon={faArrowRight}/></p></Link>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.two}>
                    <h2>Select an assignee of your choice</h2>
                        <Link to='/assignees'><p>View assignees<FontAwesomeIcon icon={faArrowRight}/></p></Link>
                    </div>
                </div>
                <div className={styles.lower}>
                    <div className={styles.three}>
                    <h2>Write down your tasks to keep track of them</h2>
                        <Link to='/todo'><p>View to do list<FontAwesomeIcon icon={faArrowRight}/></p></Link>
                    </div>
                </div>
                                        
            </section>

            
            
        </>
        
    )
}
export default Front

