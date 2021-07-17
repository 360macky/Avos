import React from 'react'
import Link from 'next/link'
import Navbar from '@components/Navbar/Navbar'
import styles from './Layout.module.css'

export default function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}
