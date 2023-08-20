import styles from './search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search=()=>{
    return(
        <div className={styles.allsearch}>
        <input type="text" placeholder="Search" className={styles.search}/><FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    )
}
export default Search