import styles from '../assets/css/header.module.css';


const linkStyle = {
  marginRight: 15
}

export default function Header(props) {
  return (
    
    <>
      
      <div className={`${props.isDark ? styles.darkbg : styles.lightbg} ${styles.bgc+" align-center"}`} >

        {/* <img className={styles.image + " text-center"} src={props.isDark ? '/Kaguya.png':'/Chika.png'} /> */}
        <img className={styles.image} style={props.isDark ? {visibility:'hidden'}:{visibility:'visible'}} src='/chikaR.png' />
        
        <div className={"text-center " + styles.header}>
          <h3>Anime Calendar</h3>
        </div>
        <img className={styles.image} style={props.isDark ? {visibility:'visible'}:{visibility:'hidden'}}  src='/KaguyaR.png'/>
      </div>
    
    </>
  )
}
