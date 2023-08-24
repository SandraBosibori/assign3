import style from './mainServices.module.css'
import { Link } from 'react-router-dom'

const MainServices=()=>{
    return(
        <>
            <div className={style.main}>
            <Link to='/oneService'><button className={style.button}>SHOPPING</button></Link>
            <Link to='/oneService'><button className={style.button}>DELIVERY</button></Link>
            <Link to='/oneService'><button className={style.button}>DRIVING</button></Link>
            <Link to='/oneService'><button className={style.button}>BANKING</button></Link>
            <Link to='/oneService'><button className={style.button}>WRITING</button></Link>
            <Link to='/oneService'><button className={style.button}>CALLS</button></Link>

            </div>
        </>
    )
    
    
}
export default MainServices