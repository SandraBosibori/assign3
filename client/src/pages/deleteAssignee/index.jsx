import { Link } from 'react-router-dom'
import styles from './deleteAssignee.module.css'
import { useState } from 'react'

const DeleteAssignee=()=>{

    const[name, setName]= useState('')
    const[location, setLocation]= useState('')

        
     



       return(
        <div className={styles.full}>
        <div className={styles.all}>
            <div className={styles.top}>
                <h1>Welcome assignee!</h1>
                <h2>Delete assignee</h2>
            </div>
            <div className={styles.main}>
                <form onSubmit={handleDelete}>
                    <div className={styles.one}>
                        <div><label>Name:</label></div>
                        <div><input
                        className={styles.input}
                            type='text'
                            required
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        /></div>
                    </div>
                    
                    <div className={styles.one}>
                    <label>Location:</label>
                    <input
                        className={styles.input}
                        type='text'
                        required
                        value={location}
                        onChange={(e)=>{setLocation(e.target.value)}}
                    />
                    </div>
                                      
                    <div className={styles.btn}><button className={styles.button1}>DELETE ASSIGNEE</button></div>
                </form>
                <Link to='/newAssignee'><button className={styles.button2}>BACK</button></Link>
            </div>
        </div>
        </div>
    )
}
export default DeleteAssignee