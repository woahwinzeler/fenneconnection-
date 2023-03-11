import Link from 'next/link';
import styles from './header.module.css';
import React from "react";


export default function Header() {
  return(
    <header className={styles.header}>
      <Link href="/" ><h1 className={styles.title}>THE FENNECONNECTION</h1></Link>
      <Link href="/contributors"><p className={styles.headeritem}><strong>LIST OF CONTRIBUTERS</strong></p></Link>
    </header>
  )
}