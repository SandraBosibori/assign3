import { Link } from 'react-router-dom'
import styles from './log.module.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import {Alert} from 'react-bootstrap'

const Log=()=>{

    const { 
        loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading}= useContext(AuthContext)

    return(
        <>
            <div className={styles.full}>
        <div className={styles.all}>
            <div className={styles.top}>
                <h1>Sign In</h1>

            </div>
            <div className={styles.main}>
                <form onSubmit={loginUser}>
                    <div className={styles.one}>
                    <label>Email:</label>
                    <input
                        type='email'
                        className={styles.input}
                        onChange={(e)=> updateLoginInfo({...loginInfo, email: e.target.value})}
                    />
                    </div>
                    <div className={styles.one}>
                    <label>Password:</label>
                    <input
                        type='password'
                        className={styles.input}
                        onChange={(e)=> updateLoginInfo({...loginInfo, password: e.target.value})}
                    />
                    </div>
                    
                    <div className={styles.btn}><button className={styles.button1} type="submit">LOGIN</button></div>
                    {isLoginLoading? "Please wait": "Login "}

                    {loginError?.error &&(
                        <Alert><p>{loginError?.message}</p></Alert>
                    )}
                    
                    <Link to='/'><div className={styles.btn}><button className={styles.button1}>BACK</button></div></Link>
                </form>

            </div>
        </div>
        </div>
        </>
    )
}
export default Log