import MainHome from "../../components/mainHome"
import TopMost from "../../components/topmost"
import styles from "./newHome.module.css"

const NewHome=()=>{
    return(
        <>
        <div className={styles.full}>
            <TopMost/> 
            <MainHome/>
        </div>
           
        
        </>
    )
}
export default NewHome