import React from "react";
import EmployeeTable from "./Table";
import { Typography } from "@mui/material";

const EmployeeList = () => {
  return (
    <>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Employee List
      </Typography>
      <EmployeeTable />
    </>
  );
};

export default EmployeeList;
