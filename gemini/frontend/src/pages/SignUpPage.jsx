import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ThemeContext from "../ThemeContext";
// import validator from "validator";

const SignUpPage = ({ showSuccessMsg, setShowSuccessMsg }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const { theme } = useContext(ThemeContext);
  const history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  // const validateEmail = (e) => {
  //   validator.isEmail(e.target.value)
  //     ? setEmailError("Valid Email") && setEmail(e.target.value)
  //     : setEmailError("Invalid Email");
  // };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); // Need to put this line first
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    setShowSuccessMsg(true);
    setMessage(result.msg);
    // alert(`Welcome ${username}, You are signed up!`);
    history.push("/login"); //go to login page after signing up
  };

  return (
    <div className={`Signup ${theme}`}>
      <img src={`./images/sm_logo_${theme}.png`} height="80px" alt="logo" />{" "}
      <br />
      <h2>Create Account</h2> <br />
      {showSuccessMsg && <div className="success">{message}</div>}
      <Form onSubmit={handleSignUp}>
        <Form.Group size="lg" controlId="username">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
          />
        </Form.Group>
        <br />
        <Form.Group size="lg" controlId="email">
          <Form.Control
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          {/* <span>{emailError}</span> */}
          <br />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        <br />
        <Form.Group size="lg" controlId="confirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
        </Form.Group>
        <br />
        <Button
          variant="secondary"
          size="md"
          type="submit"
          disabled={!validateForm() || password !== confirmPassword}
        >
          Sign Up
        </Button>{" "}
        <hr />
        <Button variant="info" onClick={() => history.push("/login")}>
          Already have an account? Log In
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
