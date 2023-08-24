import MainServices from "../../components/mainServices"
import { useState, useEffect } from "react"
import styles from '../../components/mainAssignees/mainAssignees.module.css'

const OneService=()=>{
    const [assignees, setAssignes] = useState([])
    const fetchAssignees = async ()=>{
        const response = await fetch("https://assigndata.onrender.com/")
        const data = await response.json()
        const filteredData = data.filter((person) =>{ person.task.includes('shopping')});
        setAssignes(filteredData)
        
      }
    
      
      useEffect (()=>{
        fetchAssignees()
        
      }, [])
    
    return(
        <>
        <MainServices onclick= {fetchAssignees}/>
        <div className={styles.main}>
            {assignees.map((assignee)=>{
                return(
                    <div className={styles.data}>
                        <div key={assignee._id}>
                            <div className={styles.image}></div>
                        <div>Name: {assignee.name}</div>
                        <div>Age: {assignee.age}</div>
                        <div>Location: {assignee.location}</div>
                        <div>Description: {assignee.description}</div>
                        <div>Tasks: {assignee.task}</div>
                    </div>
          
        </div>
                )
            
      })}

        </div>
        
        </>
    )
}
export default OneService