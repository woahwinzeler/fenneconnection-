import Header from "@/components/header/header"
import styles from '../styles/404.module.css'

export default function Custom404() {
  return (
  <div>
    <Header />
    <div>
    <div className={styles.textContainer}>
      <h1 className="header">404</h1>
      <p className="prose">

        OOPSIES DAISES WE COULDN'T FIND THAT PAGE
      </p>
      </div>
      <img src="https://storage.googleapis.com/content-1/drive-download-20230125T210358Z-001/DSC04560%20(1).JPG" alt="404-image" />
    </div>
  </div>

  )
}