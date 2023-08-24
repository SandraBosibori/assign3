import TopMost from '../../components/topmost/index'
import Nav from '../../components/nav'
import Search from '../../components/search'
import SideNav from '../../components/sideNav'
import style from './history.module.css'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import MainHistory from '../../components/mainHistory'



export default function History() {
  return (
    <>
    <TopMost/>
    <Nav/>
    <Search/>
    <div className={style.full}>
      <SideNav/>
      <MainHistory/>
      
      
    </div>
    </>
  )
}
