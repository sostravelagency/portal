import { v4 } from "uuid";
import connection from "../../connect";

const apiTeacher = async (req, res) => {
  if (req.method === "GET") {
    try {
      const [rows] = await connection.execute(
        "SELECT *, teacher.teacher_id AS id FROM teacher "
      );
      return res.status(200).json(rows);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else if (req.method === "POST") {
    try {
      // console.log(req.body)
      const {firstName, lastName, dob, phone, account, password, middleName}= req.body
      const account_id= v4()
      const [rows]= await connection.execute("INSERT INTO teacher(first_name, middle_name, last_name, dob, phone, account_id) VALUES(?, ?, ?, ?, ?, ?)", [firstName || "", lastName || "", middleName || "", dob || "", phone || "", account_id || ""])
      const [rows1]= await connection.execute("INSERT INTO account(account_id, account, password, role) VALUES(?, ?, ?, ?)", [account_id || "", account || "", password || "", 2])
      return res.status(200).json({ message: "add success", add :true});
      
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }
  else if(req.method=== "PATCH") {
    try {
      const {firstName, lastName, dob, phone, account, password, middleName, teacher_id}= req.body
  
      const [rows] =await connection.execute("UPDATE teacher SET first_name= ?, last_name= ?, dob= ?, middle_name= ?, phone= ? WHERE teacher_id= ?", [firstName, lastName, dob, middleName, phone, teacher_id])
      return res.status(200).json({update: true})
      
    } catch (error) {
      console.log(error)
      return res.status(500).json({update: false, error})
    }
  }
  else if (req.method === "DELETE") {
    const { student_id } = JSON.parse(req.body);
    try {
      await connection.execute("DELETE FROM teacher WHERE teacher_id = ?", [
        student_id,
      ]);
      return res.status(200).json({ delete: true });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

export default apiTeacher;
