import { useState, useEffect } from 'react'
import styles from './MainAssignees.module.css'



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
    //   const handleChange=(e)=>{
    //     const [added, setAdded]= useState([])
    //     setAdded(added.push )

    //   }
      

      
    
    return(
        <>
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
                        <div><input type='text' placeholder='Additional information'/></div>
                        <div><button>SELECT</button></div>
                    </div>
          
        </div>
                )
            
      })}

        </div>
        
        </>
    )
}
export default MainAssignees