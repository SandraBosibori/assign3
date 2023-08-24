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
                <p>Get different types of errands run for you!</p>
                <div className={styles.one}>
                    
                    <div className={styles.outer}><div className={styles.preview}>SHOPPING</div></div>
                    <div className={styles.outer}><div className={styles.preview}>DELIVERY</div></div>
                    <div className={styles.outer}><div className={styles.preview}>DRIVING</div></div>
                </div>
                <p>Choose an assignee to run your errand</p>
                <div className={styles.two}>
                <div className={styles.main}>
                {
                    assignees.filter(item => item.tasks && item.tasks.includes('writing'))
                .map((item)=>{
                return(
                    <div className={styles.data}>
                        <div key={item._id}>
                        <div className={styles.image}><img className={styles.image} src={user} alt="user"/> </div>
                        <div>Name: {item.name}</div>
                        <div>Age: {item.age}</div>
                        <div>Location: {item.location}</div>
                        <div>Description: {item.description}</div>
                        <div>Tasks: {item.task}</div>
                    </div>
          
        </div>
                )
            
      })}

        </div>
                </div>
                <p>Don't forget any task, write it down</p>
                <div className={styles.three}>
                <img className={styles.taskImage} src={taskImage} alt="taskImage"/>
                </div>
                
                
            </section>

            
            
        </>
        
    )
}
export default Front

