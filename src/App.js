import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import EmployeeList from "./Components/EmployeeList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/employeeList" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;
