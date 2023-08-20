import { useState } from 'react'

import './App.css'
import TopMost from './components/topmost'
import Nav from './components/nav'
import Search from './components/search'
import SideNav from './components/sideNav'
import Front from './components/front'


function App() {
 
  return (
    <div >
      <TopMost/>
      <Nav/>
      <Search/>
      <div className='full'>
        <SideNav/>
        <Front/>
      </div>

    </div>
  )
}

export default App
