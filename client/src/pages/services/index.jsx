import TopMost from '../../components/topmost/index'
import Nav from '../../components/nav'
import SideNav from '../../components/sideNav'
import style from './services.module.css'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import MainServices from '../../components/mainServices'
import Search2 from '../../components/search2'


export default function Services() {
  return (
    <>
    <TopMost/>
    <Nav/>
    <Search2/>
    <div className={style.full}>
      <SideNav/>
      <MainServices/>
      
    </div>
    </>
  )
}
