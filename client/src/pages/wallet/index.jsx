import TopMost from '../../components/topmost/index'
import Nav from '../../components/nav'
import Search from '../../components/search'
import SideNav from '../../components/sideNav'
import style from './wallet.module.css'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'



export default function Wallet() {
  return (
    <>
    <TopMost/>
    <Nav/>
    <Search/>
    <div className={style.full}>
      <SideNav/>
      
      
    </div>
    </>
  )
}
