import styles from './topmost.module.css'
import assign from '../../assets/assign.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://lnjxqzyrlxcfxwlclziq.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuanhxenlybHhjZnh3bGNsemlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NDMxNTMsImV4cCI6MjAwODExOTE1M30.SOZT68oT579cq0qhZm-a5CtyILRNOAvIiEpEnt8MLLw')



const TopMost=()=>{
    const navigate=useNavigate()
    const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate('/newHome')
    }
    
    return(
        <>
            <div className={styles.top}>
                <div className={styles.images}>
                    <div>
                        <Link to='/'><img className={styles.image} src={assign} alt="logo"/></Link>
                    </div>
                    <div className={styles.signing}>
                        <Link to="/sajili" ><button className={styles.button}>Sign In</button></Link>
                        <button className={styles.button2} onClick={handleLogout}>Sign Out</button>
                    </div>
                    
                    
                    
                    
                </div>
                
            
                
            </div>
        </>
    )
}
export default TopMost

{/* <FontAwesomeIcon icon={faUser} size="xl" /> */}