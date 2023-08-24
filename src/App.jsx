import { useState } from 'react'

import './App.css'
import TopMost from './components/topmost'
import Nav from './components/nav'
import Search from './components/search'
import SideNav from './components/sideNav'
import Front from './components/front'
import SearchPage from './components/searchPage'



function App() {

  const[results, setResults]= useState([])

 
  return (
    <div >
      
      <TopMost/>
      <Nav/>
      <Search setResults={setResults}/>
      
      <div className='full'>
        <SideNav/>
        <SearchPage results={results}/>
        <Front/>
      </div>

    </div>
  )
}

export default App
