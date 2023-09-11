import styles from './searchPage.module.css'
import user from '../../assets/user.png'

const SearchPage=({results})=>{
   
    return(
        <div className={styles.main}>
           {results.length === 0 ? (
        <p>No search results found.</p>
      ) : (
      results.map((assignee) => (
        <div className={styles.data}>
           <div key={assignee._id} className={styles.innerdata}>
            <div className={styles.image}><img className={styles.user} src={user} alt="user"/></div>
            <div className={styles.words}>
            <div>Name: {assignee.name}</div>
            <div>Age: {assignee.age}</div>
            <div>Location: {assignee.location}</div>
            <div>Description: {assignee.description}</div>
            <div>Tasks: {assignee.task}</div>
            <div className={styles.bottom}>
                <div><input className={styles.info} type='text' placeholder='Additional information'/></div>
                <div className={styles.below}>
                  <div className={styles.button}><button className={styles.it}>SELECT</button></div>
                  <div className={styles.button}><button className={styles.it}>CHAT</button></div>
                </div>
              </div>
              </div>
          </div>
        </div>
      )))}
    </div> 
    )
    
}
export default SearchPage