import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  EmailOutlined,
  LockOutlined,
} from "@mui/icons-material";
import axios from "axios";
import SecurityIcon from "@mui/icons-material/Security";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch(
      //   "https://carxier-dev.tahrtech.in/api/v1/auth/signin",
      //   {
      //     method: "POST",
      //     headers: {
      //       accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ email, password }),
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Failed to login");
      // }
      navigate("/employeeList");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Admin Login
              </Typography>
            </Grid>
            <Grid item container xs={12} justifyContent={"center"}>
              <TextField
                // fullWidth
                variant="outlined"
                label="Email"
                style={{ width: "50vh" }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item container xs={12} justifyContent={"center"}>
              <TextField
                // fullWidth
                variant="outlined"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                style={{ width: "50vh" }}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibility} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item container xs={4}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: "black",
                  borderRadius: "10px 10px 10px 10px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <SecurityIcon style={{ marginRight: "5px" }} />
                  Login
                </div>
              </Button>
            </Grid>
            <Grid item container xs={12} justifyContent={"center"}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={termsAccepted}
                    onChange={handleTermsAccepted}
                  />
                }
                label="By proceeding you agree to Terms and Conditions"
              />
            </Grid>
            {/* <Grid item container xs={4}>
              <Button
                onClick={() => navigate("/signup")}
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: "black",
                  borderRadius: "10px 10px 10px 10px",
                }}
              >
                <div style={{ display: "flex" }}>Register</div>
              </Button>
            </Grid> */}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
