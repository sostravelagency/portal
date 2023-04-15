import connection from "../../connect";

const handler = async (req, res) => {
  console.log(req.query);
  if (req.method === "GET") {
    try {
      const [rows] = await connection.execute(
        "SELECT *, student.student_id AS id FROM student INNER JOIN class ON class.class_id = student.class_id"
      );
      return res.status(200).json(rows);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else if (req.method === "POST") {
    return res.status(200).json({ message: "Post method" });
  } else if (req.method === "DELETE") {
    try {
      await connection.execute("DELETE FROM student WHERE student_id = ?", [
        req.body.student_id || "",
      ]);
      return res.status(200).json({ delete: true });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

export default handler;
