import TopMost from '../../components/topmost'
import Nav from '../../components/nav'
import Search from '../../components/search'
import SideNav from '../../components/sideNav'




import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import styles from './assignees.module.css'
import MainAssignees from '../../components/mainAssignees'


export default function Assignees() {
  return (
    <>
    <TopMost/>
    <Nav/>
    <Search/>
    <div className={styles.full}>
      <SideNav/>
      <MainAssignees/>
      
    </div>
    </>
  )
}
