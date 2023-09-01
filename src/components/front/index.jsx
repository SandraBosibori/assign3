import MainAssignees from '../mainAssignees'
import styles from './front.module.css'
import { useState, useEffect } from 'react'
import taskImage from '../../assets/taskimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import user from '../../assets/user.png'



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
                <div className={styles.inner}></div>
                
          
     
                
                
            </section>

            
            
        </>
        
    )
}
export default Front

