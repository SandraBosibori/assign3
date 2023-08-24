import styles from './searchPage.module.css'

const SearchPage=({results})=>{
   
    return(
        <div className={styles.main}>
      {results.map((assignee) => (
        <div className={styles.data} key={assignee._id}>
           <div className={styles.image}></div>
          <div>Name: {assignee.name}</div>
          <div>Age: {assignee.age}</div>
          <div>Location: {assignee.location}</div>
          <div>Description: {assignee.description}</div>
          <div>Tasks: {assignee.task}</div>
        </div>
      ))}
    </div> 
    )
    
}
export default SearchPage