import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { data } from "./Staticdata";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState(data.employees);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (index, employee) => {
    setEditIndex(index);
    setEditData({ ...employee });
  };

  const handleSubmit = () => {
    const updatedEmployees = [...employees];
    updatedEmployees[editIndex] = editData;
    setEmployees(updatedEmployees);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = (employee) => {
    setEmployees(employees.filter((emp) => emp !== employee));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="employee table">
        <TableHead>
          <TableRow>
            <TableCell>Sl.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              {editIndex === index ? (
                <>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <TextField
                      name="name"
                      value={editData.name}
                      onChange={handleInputChange}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name="email"
                      value={editData.email}
                      onChange={handleInputChange}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name="role"
                      value={editData.role}
                      onChange={handleInputChange}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      name="status"
                      value={editData.status}
                      onChange={handleInputChange}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      style={{ marginRight: "1rem" }}
                      onClick={handleSubmit}
                    >
                      Save
                    </Button>
                    <Button variant="contained" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>{employee.status}</TableCell>
                  <TableCell>
                    <EditIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => handleEdit(index, employee)}
                    />

                    <DeleteIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(employee)}
                    />
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default EmployeeTable;
