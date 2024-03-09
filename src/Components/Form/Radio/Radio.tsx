import styles from	'./Radio.module.css'

const Radio = ({name, options, set}:any) => {
  return (
    <div className={styles.options}>
        {options.map((opt:any, i:any) => (
            <div  key={i} className={styles.optionsSection}>
            <label htmlFor={i}>
            <input 
                type='radio' 
                id={i} 
                name={name} 
                value={opt.hour}  
                onChange={({target}) => set(target.value)}
                />
                {opt.weekdays}
            </label>        
            <p>{opt.hour}</p>
            </div>
    ))}
    </div>
  )
}

export default Radio