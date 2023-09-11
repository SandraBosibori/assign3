import styles from './topmost.module.css'
import assign from '../../assets/assign.png'
import background from '../../assets/background.jpeg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const supabase = createClient('https://lnjxqzyrlxcfxwlclziq.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuanhxenlybHhjZnh3bGNsemlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NDMxNTMsImV4cCI6MjAwODExOTE1M30.SOZT68oT579cq0qhZm-a5CtyILRNOAvIiEpEnt8MLLw')



const TopMost=()=>{
    const navigate=useNavigate()
    const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate('/newHome')
    }

    const {user,logoutUser}= useContext(AuthContext)
    
    return(
        <>
            <div className={styles.top}>
           
                <div className={styles.images}>
                    <div>
                        <Link to='/newHome'><img className={styles.image} src={assign} alt="logo"/></Link>
                    </div>

                    <div className={styles.signing}>
                        
                        {
                            user && (<>
                                <button className={styles.button1}><p>{user?.name}</p></button>
                                <Link onClick={()=>logoutUser()} to='/'><button className={styles.button2}>Sign Out</button></Link>
                            </>)
                        }
                        {!user &&(<>
                            <Link to="/register" ><button className={styles.button}>Sign Up</button></Link>
                            <Link to="/log" ><button className={styles.button2}>Sign In</button></Link>
                        </>)}
                        
                        
                    </div>
                    
                    
                    
                    
                </div>
                
            
                
            </div>
        </>
    )
}
export default TopMost

{/* <FontAwesomeIcon icon={faUser} size="xl" /> */}