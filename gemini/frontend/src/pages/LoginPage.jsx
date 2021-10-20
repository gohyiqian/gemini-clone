import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CenteredModals from "../components/CenteredModals";
import ThemeContext from "../ThemeContext";
// import IconButton from "@material-ui/core/IconButton";
// import Visibility from "@material-ui/icons/VisibilityOff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const LoginPage = ({ setIsAuth, setStatus, showErrorMsg, setShowErrorMsg }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const { theme } = useContext(ThemeContext);
  const history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Need to put this line first
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();

    if (result.error) {
      setIsAuth(false); // will run ProtectedRoute and redirect to '/'
      setShowErrorMsg(true);
      setMessage(result.error);
    }

    if (result.token) {
      localStorage.setItem("token", result.token);
      setIsAuth(true);
      setStatus("Log Out");
      // setShowModal(true); // modal pops up
      history.push("/wallet");
    }
  };

  return (
    <div className={`Login ${theme}`}>
      <img src={`./images/sm_logo_${theme}.png`} height="80px" alt="logo" />{" "}
      <br />
      <h2>Welcome Back</h2> <br />
      {showErrorMsg && <div className="fail">{message}</div>}
      <Form onSubmit={handleLogin}>
        <Form.Group size="lg" controlId="username">
          <Form.Control
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={handleUsername}
          />
        </Form.Group>
        <br />
        <Form.Group size="lg" controlId="password" className="pass-wrapper">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <i>{eye}</i>
          {/* <IconButton>
            <Visibility />
          </IconButton> */}
        </Form.Group>

        <br />
        <Button
          variant="secondary"
          size="md"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
        <CenteredModals show={showModal} onHide={() => setShowModal(false)} />
        <h6 onClick={() => history.push("/forgot-password")}>
          Forgot your password?
        </h6>
        <hr />
        <Button variant="info" onClick={() => history.push("/signup")}>
          No account? Sign Up Here
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
