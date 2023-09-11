import styles from './mainhistory.module.css'
import user from '../../assets/user.png'
import { useState,useEffect } from 'react';



const MainHistory=()=> {

    const [selectedAssignees, setSelectedAssignees] = useState([])

    useEffect(() => {

      const storedAssignees = JSON.parse(sessionStorage.getItem('selectedAssignees'))
  

      if (storedAssignees) {
        setSelectedAssignees(storedAssignees)
      }
    }, [])
  
   
  return (
    <>
        <div className={styles.main}>
            {selectedAssignees.length > 0 ? (
                <div>
                {selectedAssignees.map((assignee, index) => (
                    <div key={index} className={styles.data}>
                        <div  className={styles.innerdata}>
                        <div className={styles.image}><img className={styles.user} src={user} alt="user"/></div>
                            <div className={styles.words}>
                            <div>Name: {assignee.name}</div>
                            <div>Age: {assignee.age}</div>
                            <div>Location: {assignee.location}</div>
                            <div>Description: {assignee.description}</div>
                            <div>Tasks      : {assignee.task}</div>
                            <div className={styles.bottom}>
                                <div className={styles.below}>
                                    
                                    <div className={styles.button}><button className={styles.it}>CHAT</button></div>
                                    
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                    ))}
                   
                    </div>
                ) : (
                    <p>No data selected.</p>
                )}
                </div>
    </>
  )
}
export default MainHistory
