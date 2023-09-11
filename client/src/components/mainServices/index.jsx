import style from './mainServices.module.css'
import { Link } from 'react-router-dom'

const MainServices=()=>{
    
    return(
        <>
            <div className={style.main}>
            <Link to='/shopping'><button className={style.button}><h2>SHOPPING</h2> 
            <p>Access all assignees that can do your shopping for you</p>
            </button></Link>
            <Link to='/delivery'><button className={style.button}><h2>DELIVERY</h2>
            <p>Access all assignees that can make deliveries for you</p>
            </button></Link>
            <Link to='/driving'><button className={style.button}><h2>DRIVING</h2>
            <p>Access all assignees that can take care of your driving needs for you</p>
            </button></Link>
            <Link to='/banking'><button className={style.button}><h2>BANKING</h2>
            <p>Access all assignees that can take care of your banking needs for you</p>
            </button></Link>
            <Link to='/writing'><button className={style.button}><h2>WRITING</h2>
            <p>Access all assignees that can do your writing for you</p>
            </button></Link>
            <Link to='/calls'><button className={style.button}><h2>CALLS</h2>
            <p>Access all assignees that can make and take your calls for you</p>
            </button></Link>

            </div>
        </>
    )
    
    
}
export default MainServices