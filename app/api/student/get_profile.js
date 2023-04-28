import axios from "axios"

const get_profile_student= async (student_id)=> {
    const res= await axios({
        url: "/api/v1/student/profile",
        method: "get",
        params: {
            student_id
        }
    })
    const result= await res.data
    return result
}

export default get_profile_student