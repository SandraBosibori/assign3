import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import styles from './sajili.module.css'
import { Link,useNavigate} from 'react-router-dom'


const supabase = createClient('https://lnjxqzyrlxcfxwlclziq.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuanhxenlybHhjZnh3bGNsemlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NDMxNTMsImV4cCI6MjAwODExOTE1M30.SOZT68oT579cq0qhZm-a5CtyILRNOAvIiEpEnt8MLLw')

const Sajili= () =>{
  const navigate=useNavigate()
  const user = supabase.auth.user

  const handleLogin= async () => {
    await supabase.auth.signInWithPassword()
    navigate('/newHome')
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
}

    return(
        <div className={styles.all}>
  
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google']}
            onSubmit={handleLogin}
          />

          
          <div className={styles.home}>
            <div className={styles.home1}>
            {user ?
            <>
              <button className={styles.button} onClick={handleLogout}>LOGOUT</button>
             
              <Link to='/newHome'><button className={styles.button}>HOME</button></Link>
             </>
             :
            <Link to='/'><button className={styles.button}>BACK</button></Link>
             }
           </div>
          </div>
        </div>
      )
} 
export default Sajili