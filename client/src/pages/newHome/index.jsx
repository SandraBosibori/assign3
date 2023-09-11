import Nav from '../../components/nav'
import Search2 from '../../components/search2'
import SideNav from '../../components/sideNav'
import TopMost from '../../components/topmost'
import Front from '../../components/front'
import styles from './newHome.module.css'




function NewHome() {



 
  return (
    <div  >
      <TopMost/>
      <Nav/>
      <Search2/>
      
      <div className={styles.full}>
        <SideNav/>
               
        <Front/>
        
      </div>

    </div>
  )
}

export default NewHome
