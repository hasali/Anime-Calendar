import Header from './Header'
import Dropdown from './Dropdown'
import styles from '../assets/css/MyLayout.module.css'
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div className={styles.error}>
      <Header />
   
    </div>
  )
}
