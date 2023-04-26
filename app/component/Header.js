import { useRouter } from "next/router"

const Header= ()=> {
    const router= useRouter()
    return (
        <div style={{width: "100%", height: 60, padding: 10, display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
            <div style={{fontSize: 48, fontWeight: 600, color: "#2e89ff"}}>Portal</div>
            <div style={{color: "#2e89ff", cursor: "pointer"}} onClick={()=> router.push("/login")}>Login</div>
        </div>
    )
}

export default Header