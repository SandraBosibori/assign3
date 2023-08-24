import { createClient } from "@supabase/supabase-js"
import { Auth} from "@supabase/auth-ui-react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import styles from './welcome.module.css'
import { useState, useEffect } from "react"


const supaBaseUrl = " https://lnjxqzyrlxcfxwlclziq.supabase.co"
const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuanhxenlybHhjZnh3bGNsemlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NDMxNTMsImV4cCI6MjAwODExOTE1M30.SOZT68oT579cq0qhZm-a5CtyILRNOAvIiEpEnt8MLLw"

const supabase = createClient(supaBaseUrl, supaBaseAnonKey)

const Welcome=()=>{
    const [user, setUser]=useState({})
    const navigate= useNavigate()

    useEffect(()=>{
        async function getUserData(){
            await supabase.auth.getUser.then((value)=>{
                if(value.data?.user){
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData()

        async function signOutUser(){
            const {error}= await supabase.auth.signOut()
            navigate("/")
        }
        signOutUser()

    },[])
    return(
        <>
        {Object.keys(user).length !== 0 ?
            <>
                <h1>Welcome to Assign</h1>
                <button onClick={()=>signOutUser()}>Sign out</button>
            </>
        :
            <>
                 <h1>User not logged in</h1>
                <button onClick={()=>{navigate("/")}}>Back to home</button>
            </>

           
        }
            
        </>
    )
}
export default Welcome