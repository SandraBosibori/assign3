import styles from './search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Search=({setResults})=>{

    const [input, setInput]= useState("")

    

    const fetchData=(value)=>{
        fetch('https://assigndata.onrender.com/').then((response)=> response.json()).then(json=>{
            const results= json.filter((user)=>{
                return value && user && user.name && user.name.toLowerCase().includes(value)||user.location && user.location.toLowerCase().includes(value)
            })
            setResults(results)
        })
    }

    const handleChange=(value)=>{
        setInput(value)
        fetchData(value)
        e.preventDefault

    }
    return(
        <>
            <div className={styles.allsearch}>
            <input type="text" placeholder="Search" className={styles.search} onChange={(e)=> handleChange(e.target.value )}/>
            <button className={styles.icon}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
            
        </>
        
    )
}
export default Search