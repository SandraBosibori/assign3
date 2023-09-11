import { useState, useEffect } from 'react'
import styles from './calls.module.css'
import user from '../../assets/user.png'
import { Link } from 'react-router-dom'



const Calls=(selected)=>{
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

      const handleSelect = (assignee) => {
        const selectedAssignees = JSON.parse(sessionStorage.getItem('selectedAssignees')) || []

    selectedAssignees.push(assignee)

    sessionStorage.setItem('selectedAssignees', JSON.stringify(selectedAssignees))

    history('/history')

     
    }
     
      

      
    
    return(
        <section className={styles.all}>
            <div className={styles.top}>
            <div className={styles.t1}><h1>Calls</h1></div>
            <div className={styles.button}><Link to='/services'><button className={styles.btn}>Back to services</button></Link></div>
            </div>
        
        <div className={styles.main}>
            {assignees
            .filter(assignee => assignee.task?.includes('calls'))
            .map((assignee)=>{
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
                                <div><input className={styles.info} type='text' placeholder='Additional information'/></div>
                                <div className={styles.below}>
                                  <div className={styles.button}><button className={styles.it} onClick={() => handleSelect(assignee)}>SELECT</button></div>
                                  <div className={styles.button}><button className={styles.it}>CHAT</button></div>
                                </div>
                              </div>
                            </div>
                          </div>
          
        
        </div>
                )
            
      })}

        </div>
        
        </section>
    )
}
export default Calls