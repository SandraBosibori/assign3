import TopMost from '../../components/topmost/index'
import Nav from '../../components/nav'
import Search from '../../components/search'
import SideNav from '../../components/sideNav'
import style from './history.module.css'
import MainHistory from '../../components/mainHistory'



const History=()=> {


  return (
    <>
    <TopMost/>
    <Nav/>
    <Search/>
    <div className={style.full}>
      <SideNav/>
      <div className={style.main}>
     <MainHistory/>
      </div>
      
      
    </div>
    </>
  )
}
export default History
