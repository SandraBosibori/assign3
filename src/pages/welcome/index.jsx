// import { createClient } from "@supabase/supabase-js"
// import { Auth} from "@supabase/auth-ui-react"
// import { Link, Navigate, useNavigate } from "react-router-dom"
// import styles from './welcome.module.css'
// import { useState, useEffect } from "react"


// const supaBaseUrl = " https://lnjxqzyrlxcfxwlclziq.supabase.co"
// const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuanhxenlybHhjZnh3bGNsemlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NDMxNTMsImV4cCI6MjAwODExOTE1M30.SOZT68oT579cq0qhZm-a5CtyILRNOAvIiEpEnt8MLLw"

// const supabase = createClient(supaBaseUrl, supaBaseAnonKey)

// const Welcome=()=>{
//     const [user, setUser]=useState({})
//     const navigate= useNavigate()

//     async function getUserData(){
//         const { data: userData, error } = await supabase.auth.getUser();
//         if (userData) {
//             console.log(userData);
//             setUser(userData);
//         }
//     }
    
//     async function signOutUser(){
//         const {error}= await supabase.auth.signOut()
//         navigate("/login")
//     }

//     useEffect(()=>{
//         getUserData()
//     },[])

        


//     return(
//         <>
//         <header className="app-header">
//             {Object.keys(user).length !==0 
//             ?
//             <>
//                 <h1>Welcome to Assign</h1>
//                 <button onClick={()=>signOutUser()}>Sign out</button>
//             </>
//             :
//             <>
//                 <h1>User is not logged in</h1>
//                 <button onClick={()=> {navigate("/")}}>Go back to home</button>
//             </>
//         }
         
//           </header>
          
//         </>
//     )
// }
// export default Welcome