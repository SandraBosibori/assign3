import { Link } from 'react-router-dom'
import styles from './newAssignee.module.css'
import { useState } from 'react'

const NewAssignee=()=>{

    const[name, setName]= useState('')
    const[age, setAge]= useState('')
    const[location, setLocation]= useState('')
    const[description, setDescription]= useState('')
    const[task, setTask]= useState('')

    const handleSubmit= (e)=>{
        e.preventDefault()
        const assignee= {name, age, location, description, task}

        fetch('https://assigndata.onrender.com/create', {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(assignee)
        }).then(()=>{
            return(
                <>
                 <p>New assignee added</p>
                </>
               
            )
            
            
        })
    }

    return(
        <div className={styles.full}>
        <div className={styles.all}>
            <div className={styles.top}>
                <h1>Welcome assignee!</h1>
                <h2>Add a new assignee</h2>
            </div>
            <div className={styles.main}>
                <form onSubmit={handleSubmit}>
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
                    <label>Age:</label>
                    <input
                        className={styles.input}
                        type='text'
                        required
                        value={age}
                        onChange={(e)=>{setAge(e.target.value)}}
                    />
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
                    <div className={styles.one}>
                    <label>Description:</label>
                    <input
                        className={styles.input}
                        type='text'
                        required
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                    />
                    </div>
                    <div className={styles.one}>
                    <label>Task:</label>
                    <input
                        className={styles.input}
                        type='text'
                        required
                        value={task}
                        onChange={(e)=>{setTask(e.target.value)}}
                    />
                    </div>
                    <div className={styles.btn}><button className={styles.button1}>ADD ASSIGNEE +</button></div>
                </form>
                <Link to='/newHome'><button className={styles.button2}>BACK HOME</button></Link>
                <Link to='/deleteAssignee'><button className={styles.button2}>delete</button></Link>
            </div>
        </div>
        </div>
    )
}
export default NewAssignee