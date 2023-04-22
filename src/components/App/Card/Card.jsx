
import styles from './Card.module.css'
import avatar__1 from '../../../images/avatar1.png'
import avatar__2 from '../../../images/avatar2.png'
import avatar__3 from '../../../images/avatar3.png'

const Card = (props) => {

  return (
      
      <div className={styles.grid__container}>
        <div className={styles.card__1}>
        <img src={avatar__1} alt="avatar__1"/>
        <div className={styles.nameText}>{props.name_1}</div>
        <div className={styles.aboutText}>{props.about_1}</div>
        </div>
        <div className={styles.card__2}>
        <img src={avatar__2} alt="avatar__2"/>
        <div className={styles.nameText}>{props.name_2}</div>
        <div className={styles.aboutText}>{props.about_2}</div>
        </div>
        <div className={styles.card__3}>
        <img src={avatar__3} alt="avatar__3"/>
        <div className={styles.nameText}>{props.name_3}</div>
        <div className={styles.aboutText}>{props.about_3}</div>
        </div>
      </div>
      
   
  )
}

export default Card