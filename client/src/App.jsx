import styles from './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TopMost from "./components/topmost"
import MainHome from "./components/mainHome"
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import { ChatContextProvider } from './context/chatContext'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Chat from './pages/chat'
import Log from './pages/log'


const App=()=>{
    const {user}= useContext(AuthContext)
    return(
        <>
        <div className={styles.full}>
            
            <TopMost/>
            <MainHome/>
        </div>
        </>
 
    )
}
export default App