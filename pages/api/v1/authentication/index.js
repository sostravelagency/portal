import connection from "../../connect"

const handler= async (req, res)=> {
    if(req.method=== "POST") {
        try {
            const {uid }= req.body
            const [rows]= await connection.execute("SELECT * FROM account WHERE account_id= ?", [uid])
            return res.status(200).json({login: true, data: rows[0]})
        } catch (error) {
            return res.status(500).json(error)            
        }
        
    }
}

export default handler