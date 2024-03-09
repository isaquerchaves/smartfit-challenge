import styles from './Legend.module.css'


const Legend = ({title, images}:any) => {  

  return (   
    <div className={styles.legend}>
        <h3>{title}</h3>
        <div className={styles.images}>
            {images.map((image:any, i:any)=>(
                <span key={i}>
                    <img src={image.image} alt={`${title} ${image.subtitle}`}/>
                    <p>{image.subtitle}</p>
                </span> 
            ))}
        </div>
    </div>
  )
}

export default Legend