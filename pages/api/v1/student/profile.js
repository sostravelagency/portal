import connection from "../../connect"

const handler= async (req, res)=> {
    if(req.method=== "GET") {
        const {student_id }= req.query
        try {
            const [rows]= await connection.execute("SELECT * FROM student WHERE student_id= ?", [student_id])
            return res.status(200).json(rows)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

export default handler