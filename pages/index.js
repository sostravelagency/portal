import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Login from './login/admin'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
          <title>Portal</title>
      </Head>
      <main style={{color: "#000"}} className={styles.main}>
        <Login />
      </main>
    </>
  )
}
