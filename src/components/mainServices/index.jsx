import style from './mainServices.module.css'
const MainServices=()=>{
    return(
        <>
            <div className={style.main}>
            <button className={style.button}>SHOPPING</button>
            <button className={style.button}>DELIVERY</button>
            <button className={style.button}>DRIVING</button>
            <button className={style.button}>BANKING</button>
            <button className={style.button}>WRITING</button>
            <button className={style.button}>CALLS</button>

            </div>
        </>
    )
    
    
}
export default MainServices