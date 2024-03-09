import styles from './Legend.module.css'


const LegendUnit = ({images}:any) => {   

  return (   
    <div className={styles.legend}>
        <div className={styles.images}>
            {images.map((image:any, i:any)=>(
                <span key={i}>
                    <img src={image.image} alt={`${image.subtitle}`}/>
                </span> 
            ))}
        </div>
    </div>
  )
}

export default LegendUnit