import React from 'react'
import Cookies from "js-cookie"

const Header = () => {
  return (
    <div style={{width: "100%", height: 60, padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <div style={{fontSize: 48, fontWeight: 600, color: "#2e89ff"}}>Portal</div>
      <div onClick={()=> {
        Cookies.remove("uid")
        window.location.href= window.location.origin
      }} style={{color: "#000", cursor: "pointer"}}>Logout</div>
    </div>
  )
}

export default Header