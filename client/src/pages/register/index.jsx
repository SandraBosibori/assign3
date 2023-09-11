import { useContext } from 'react'
import styles from './register.module.css'
import { AuthContext } from '../../context/authContext'
import {Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


const Register=()=>{
    const navigate= useNavigate()

    const handlemainHome=()=>{
        navigate('/newhome')

        
    }

    const {registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading}= useContext(AuthContext)
    return(
        <>
            <div className={styles.full}>
        <div className={styles.all}>
            <div className={styles.top}>
                <h1>Sign Up</h1>

            </div>
            <div className={styles.main}>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    handlemainHome()
                    registerUser()
                }}>
                    <div className={styles.one}>
                        <label>Name:</label>
                             <input 
                            className={styles.input}
                            onChange={(e)=>updateRegisterInfo({...registerInfo, name:e.target.value})}/></div>
                      <div className={styles.one}>
                        <label>Email:</label>
                        <input
                            className={styles.input}
                            onChange={(e)=>updateRegisterInfo({...registerInfo, email:e.target.value})}
                        />
                    </div>
                    <div className={styles.one}>
                    <label>Password:</label>
                    <input
                        type='password'
                        className={styles.input}
                        onChange={(e)=>updateRegisterInfo({...registerInfo, password:e.target.value})}
                    />
                    </div>
                    
                    <div className={styles.btn}><button className={styles.button1}>{isRegisterLoading? "Loading":"REGISTER"}</button></div>

                    {
                        registerError?.error&& (<Alert><p>{registerError?.message}</p></Alert>)
                    }
                    <div className={styles.btn}><Link to='/'><button className={styles.button1}>BACK</button></Link></div>
                </form>

            </div>
        </div>
        </div>
        </>
    )
}
export default Register