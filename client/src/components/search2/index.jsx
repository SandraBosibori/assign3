import styles from './search2.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Search2=()=>{

  
    return(
        <>
        <div className={styles.allsearch}>
            <Link to="/assignees"><button className={styles.btn}>
           Search for tasks or assignees
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
            </Link>
        </div>
        </>
        
    )
}
export default Search2