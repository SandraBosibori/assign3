import { useState, useEffect } from 'react'
import styles from './MainAssignees.module.css'
import user from '../../assets/user.png'



const MainAssignees=(selected)=>{
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
        <div className={styles.main}>
            {assignees.map((assignee)=>{
                return(
                    <div className={styles.data}>
                        <div key={assignee._id} className={styles.innerdata}>
                        <div className={styles.image}><img className={styles.user} src={user} alt="user"/></div>
                        <div className={styles.words}>
                        <div>Name: {assignee.name}</div>
                        <div>Age: {assignee.age}</div>
                        <div>Location: {assignee.location}</div>
                        <div>Description: {assignee.description}</div>
                        <div>Tasks: {assignee.task}</div>
                        <div className={styles.bottom}>
                        <div><input className={styles.phone} type='text' placeholder='Phone number'/></div>
                        <div><input className={styles.info} type='text' placeholder='Additional information'/></div>
                        <div><button>SELECT</button></div>
                        </div>
                        </div>
                    </div>
          
        </div>
                )
            
      })}

        </div>
        
        </>
    )
}
export default MainAssignees