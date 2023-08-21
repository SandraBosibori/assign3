import { useState, useEffect } from 'react'
import styles from './MainAssignees.module.css'

const MainAssignees=()=>{
    const [assignees, setAssignes] = useState([])
    const fetchAssignees = async ()=>{
        const response = await fetch("https://assigndata.onrender.com/")
        const data = await response.json()
        
        setAssignes(data.results)
      }
    
      
      useEffect (()=>{
        fetchAssignees()
        
      }, [])
    
    return(
        <>
        <div className={styles.main}>
        {assignees.map((assignee)=>{
        <div key={assignee.id}>
          <div>{assignee.name}</div>
          <div>{assignee.age}</div>
          <div>{assignee.location}</div>
          <div>{assignee.description}</div>
          <div>{assignee.task}</div>
          
        </div>
      })}

        </div>
        
        </>
    )
}
export default MainAssignees