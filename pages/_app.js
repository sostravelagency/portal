import role from '@/app/api/role/role'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [auth, setAuth]= useState()
  const [user, setUser]= useState()
  useEffect(()=> {
    (async ()=> {
      const result= await role()
      console.log(result)
    })()
  }, [])
  return <div>
    <Component {...pageProps} />
  </div>
}
