import Auth from "../../auth"
import Nav from "../../components/nav"
import TopMost from "../../components/topmost"
import styles from './authen.module.css'

const Authen=()=>{
    return(
        <>
            <TopMost/>
            <Nav/>
            <div className={styles.auth}>
                <div className={styles.in}>
                    <h1>Login</h1>
                    <Auth/>
                </div>
                
            </div>
            
        </>
    )
}
export default Authen