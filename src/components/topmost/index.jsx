import styles from './topmost.module.css'
import assign from '../../assets/assign.png'


const TopMost=()=>{
    
    return(
        <>
            <div className={styles.top}>
                <div>
                    <img className={styles.image} src={assign} alt="logo"/>
                </div>
                
            
                
            </div>
        </>
    )
}
export default TopMost

{/* <FontAwesomeIcon icon={faUser} size="xl" /> */}