import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import styles from './sajili.module.css'
import { Link } from 'react-router-dom'

const supabase = createClient('https://lnjxqzyrlxcfxwlclziq.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuanhxenlybHhjZnh3bGNsemlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NDMxNTMsImV4cCI6MjAwODExOTE1M30.SOZT68oT579cq0qhZm-a5CtyILRNOAvIiEpEnt8MLLw')

const Sajili= () =>{
    return(
        <>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
        />
        <div className={styles.home}>
        <Link to='/'><button className={styles.button}>BACK HOME</button></Link>
        </div>
        </>
      )
} 
export default Sajili