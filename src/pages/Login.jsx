import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"


const Home = () =>{
    const { session, handleLogout } = useContext(AuthContext)


    return (
        <>
            {
                !session ?
                
                <>  
                    <h1>You need to login</h1>
                    <Link to='/login'>Login</Link>

                </>

                    :
                    <>
                        <button onClick={handleLogout}>SignOut</button>
                        <Link to='/projects'>Projects</Link>
                        <h1>Home</h1>                
                    </>

            }
        </>
    )
}

export default Home