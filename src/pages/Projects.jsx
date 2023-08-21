import { supabase } from "../utils/supaBaseConfig"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/authContext"
const Projects = ()=>{  
    const { session } = useContext(AuthContext)

    return (
        <>  
            {
                !session ? 
                <>  
                    <Link to='/login'>Login</Link>
                    <h1>You are not Logged In</h1>
                </> :
                <>
                    <Link to='/'>Home</Link>
                    <h1>Projects Page</h1>
                </>

            }

        </>
    )
}

export default Projects