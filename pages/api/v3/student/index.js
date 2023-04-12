import connection from "../../connect";

const apiStudent = async (req, res) => {
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
    const { student_id } = JSON.parse(req.body);
    try {
      await connection.execute("DELETE FROM student WHERE student_id = ?", [
        student_id,
      ]);
      return res.status(200).json({ delete: true });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

export default apiStudent;
