import styles from './Checkbox.module.css'

const Checkbox = ({label, value, set}:any) => {

  const handleChange = ({target}:any) => {
    if(target.checked){
      set(true)
    }else{
      set(false)
    }
  }
  return (
    <div className={styles.chbox}>
        <input 
            type="checkbox" 
            name="closed" 
            id="closed" 
            checked={value} 
            onChange={handleChange}
        />
        <label htmlFor="closed">{label}</label>
    </div>
  )
}

export default Checkbox