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
            console.log('new assignee added')
        })
    }

    return(
        <>
            <div className={styles.top}>
                <h1>Welcome assignee!</h1>
                <h2>Add a new assignee</h2>
            </div>
            <div className={styles.main}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.one}>
                    <label>Name:</label>
                    <input
                        type='text'
                        required
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                    </div>
                    <div className={styles.one}>
                    <label>Age:</label>
                    <input
                        type='text'
                        required
                        value={age}
                        onChange={(e)=>{setAge(e.target.value)}}
                    />
                    </div>
                    <div className={styles.one}>
                    <label>Location:</label>
                    <input
                        type='text'
                        required
                        value={location}
                        onChange={(e)=>{setLocation(e.target.value)}}
                    />
                    </div>
                    <div className={styles.one}>
                    <label>Description:</label>
                    <input
                        type='text'
                        required
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                    />
                    </div>
                    <div className={styles.one}>
                    <label>Task:</label>
                    <input
                        type='text'
                        required
                        value={task}
                        onChange={(e)=>{setTask(e.target.value)}}
                    />
                    </div>
                    <button className={styles.button}>ADD ASSIGNEE +</button>
                </form>
                <Link to='/'><button className={styles.button}>BACK HOME</button></Link>
            </div>
        </>
    )
}
export default NewAssignee