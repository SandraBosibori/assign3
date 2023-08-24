import { useState, useEffect } from 'react'
import styles from './banking.module.css'
import user from '../../assets/user.png'
import { Link } from 'react-router-dom'



const Banking=(selected)=>{
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
        <section className={styles.all}>
            <div><h1>Banking</h1></div>
            <Link to='/services'><div className={styles.button}><button>Back to services</button></div></Link>
        
        
        <div className={styles.main}>
            {assignees
            .filter(assignee => assignee.task?.includes('banking'))
            .map((assignee)=>{
                return(
                    <div className={styles.data}>
                        <div key={assignee._id}>
                        <div className={styles.image}><img className={styles.user} src={user} alt="user"/></div>
                        <div>Name: {assignee.name}</div>
                        <div>Age: {assignee.age}</div>
                        <div>Location: {assignee.location}</div>
                        <div>Description: {assignee.description}</div>
                        <div>Tasks: {assignee.task}</div>
                        <div className={styles.bottom}>
                        <div><input type='text' placeholder='Phone number'/></div>
                        <div><input type='text' placeholder='Additional information'/></div>
                        <div><button>SELECT</button></div>
                        </div>
                    </div>
          
        </div>
                )
            
      })}

        </div>
        
        </section>
    )
}
export default Banking