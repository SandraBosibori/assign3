// import { createClient } from "@supabase/supabase-js"
// import { Auth} from "@supabase/auth-ui-react"
// import { Link, Navigate, useNavigate } from "react-router-dom"
// import styles from './login.module.css'
// import { useEffect } from "react"



// const supaBaseUrl = "https://lnjxqzyrlxcfxwlclziq.supabase.co"
// const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuanhxenlybHhjZnh3bGNsemlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NDMxNTMsImV4cCI6MjAwODExOTE1M30.SOZT68oT579cq0qhZm-a5CtyILRNOAvIiEpEnt8MLLw"

// const supabase = createClient(supaBaseUrl, supaBaseAnonKey)


// const Login=()=>{
//     const navigate= useNavigate()

//     useEffect(()=>{
//         supabase.auth.onAuthStateChange(async(event)=>{
//             console.log(event)
//             if(event !== "SIGNED_OUT"){
//                 navigate("/login")
//             }else{
//                 navigate("/login")
//             }
    
//         })
//     },[])
    
    
//     return(
//         <>
//         <div className={styles.auth}>
//             <Auth
//                     supabaseClient={supabase}
//                     // appearance={{theme: ThemeSupa}}
//                     theme="dark"
//                     providers={["google"]}
//                 />
//                 <Link to='/'><button>Back home</button></Link>
//         </div>
           
//         </>
//     )
// }
// export default Login