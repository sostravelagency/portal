import connection from "../../connect"

const login= async (req, res)=> {
    if(req.method=== "POST") {
        const [rows]= await connection.execute("SELECT account, role FROM account WHERE account= ? AND password= ?", [req.body.account, req.body.password])
        if(rows.length <= 0 ) {
            return res.status(200).json({exist: false, message: "Account or password is not correct"})
        }
        else {
            if(rows[0].role=== 1) {
                return res.status(200).json({exist: true, login: true, role: 1})
            }
            if(rows[0].role=== 2) {
                return res.status(200).json({exist: true, login: true, role: 2})
            }
            if(rows[0].role=== 3) {
                return res.status(200).json({exist: true, login: true, role: 3})
            }
            return res.status(200).json({exist: true, login: true, role: rows[0].role})

        }
    }
}

export default login