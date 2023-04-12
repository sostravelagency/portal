import Admin from ".."
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from "axios";
import UpdateTeacher from "./Component/UpdateTeacher";
import { DeleteOutlined } from "@ant-design/icons";
const AdminManageStudents= ()=> {
    return (
        <Admin>
            <div style={{flex: "1 1 0", height: "100vh", overflow: "auto"}}>
                <StudentData />
            </div>
        </Admin>
    )
}   

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'first_name',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
        field: 'middle_name',
        headerName: 'Middle name',
        width: 150,
        editable: true,
      },
    {
      field: 'last_name',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
        field: 'dob',
        headerName: 'DOB',
        width: 150,
        editable: true,
      },
      {
        field: 'phone',
        headerName: 'Phone',
        width: 150,
        editable: true,
      },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.first_name || ''} ${params.row.middle_name || ''} ${params.row.last_name || ''}`,
    },
    {
        headerName: 'Action',
        width: 200,
        editable: true,
        renderCell: (params)=> {
            return (
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 10}}>
                    <UpdateTeacher {...params.row} />
                    <DeleteOutlined onClick={async ()=> {
                        swal("Notice", "Are you sure want to delete this teacher", {buttons: {
                            ok: "Confirm",
                            cancel: "Cancel"
                        }})
                        .then(async value=> {
                            if(value=== "ok") {
                                const res= await fetch('/api/v3/teacher',{
                                    method: "delete",
                                    body: JSON.stringify({student_id: params.row.id}),
                                })
                                const result= await res.json()
                                if(result?.delete=== true) {
                                    swal("Notice", "Delete teacher successfully", "success")
                                    .then(()=> setChange(prev=> !prev))
                                }
                                else {
                                    swal("Notice", "Error unexpected", "error")
                                }
                            }
                            else {
                                return null
                            }
                        })
                        .catch(()=> swal("Notice", "Error unexpected", "error"))
                    }} style={{cursor: "pointer"}} title={"Delete teacher"}  />
                </div>
            )
        }
      }
  ];
  
function StudentData() {
    const [data, setData]= React.useState([])
    React.useEffect(()=> {
        (async ()=> {
        const res= await axios({
            url: "/api/v3/teacher",
            method: "get"
        })
        const result= await res.data
        return setData(result)
        })()
    }, [])
    return (
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    );
  }

export default AdminManageStudents