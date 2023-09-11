import TopMost from '../../components/topmost'
import Nav from '../../components/nav'
import Search from '../../components/search'
import SideNav from '../../components/sideNav'
import SearchPage from '../../components/searchPage'
import { useState } from 'react'




import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import styles from './assignees.module.css'
import MainAssignees from '../../components/mainAssignees'


export default function Assignees() {

  const[results, setResults]= useState([])

  return (
    <>
    <TopMost/>
    <Nav/>
    
    <Search setResults={setResults}/>
      
      <div className={styles.full}>
        <SideNav/>
        {results.length > 0 ? (
        <SearchPage results={results}/>
        ) : (
        <MainAssignees/>
        )}
        </div>

    
    </>
  )
}
