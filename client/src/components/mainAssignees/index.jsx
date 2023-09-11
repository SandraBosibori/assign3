import { useState, useEffect } from 'react'
import styles from './MainAssignees.module.css'
import user from '../../assets/user.png'
import { useNavigate } from 'react-router-dom'




const MainAssignees=(selected)=>{

    const [assignees, setAssignes] = useState([])
    const history = useNavigate()

    const fetchAssignees = async ()=>{
        const response = await fetch("https://assigndata.onrender.com/")
        const data = await response.json()
        console.log(data)
        setAssignes(data)
      }
    
      
      useEffect (()=>{
        fetchAssignees()
        
      }, [])

      const deleteData = async(id)=>{
        const response = await fetch(`https://assigndata.onrender.com/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',

            },
  
        })
        const data = await response.json()
        window.location.reload()
    }
    const handleSelect = (assignee) => {
        const selectedAssignees = JSON.parse(sessionStorage.getItem('selectedAssignees')) || []

    selectedAssignees.push(assignee)

    sessionStorage.setItem('selectedAssignees', JSON.stringify(selectedAssignees))

    history('/history')

     
    }
      

      
    
    return(
        <>
        
        <div className={styles.main}>
            {assignees.map((assignee)=>{
                return(
                    <div key={assignee._id} className={styles.data}>
                        <div  className={styles.innerdata}>
                            <div className={styles.image}><img className={styles.user} src={user} alt="user"/></div>
                            <div className={styles.words}>
                              <div>Name       : {assignee.name}</div>
                              <div>Age        : {assignee.age}</div>
                              <div>Location   : {assignee.location}</div>
                              <div>Description: {assignee.description}</div>
                              <div>Tasks      : {assignee.task}</div>
                              <div className={styles.bottom}>
                                  <div className={styles.below}>
                                  <div className={styles.button}><button className={styles.it} onClick={() => handleSelect(assignee)}>SELECT</button></div>
                                  <div className={styles.button}><button className={styles.it}>CHAT</button></div>
                                  <div className={styles.button}><button className={styles.it} onClick={()=>deleteData(assignee._id)}>DELETE</button></div>
                                </div>
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