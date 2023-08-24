import styles from './searchPage.module.css'
import user from '../../assets/user.png'

const SearchPage=({results})=>{
   
    return(
        <div className={styles.main}>
           {results.length === 0 ? (
        <p>No search results found.</p>
      ) : (
      results.map((assignee) => (
        <div className={styles.data} key={assignee._id}>
           <div className={styles.image}><img className={styles.user} src={user} alt="user"/></div>
          <div>Name: {assignee.name}</div>
          <div>Age: {assignee.age}</div>
          <div>Location: {assignee.location}</div>
          <div>Description: {assignee.description}</div>
          <div>Tasks: {assignee.task}</div>
          <div className={styles.bottom}>
          <div><input type='text' placeholder='Phone number'/></div>
          <div><input type='text' placeholder='Additional information'/></div>
          <div><button>SELECT</button></div>
          </div>
        </div>
      )))}
    </div> 
    )
    
}
export default SearchPage