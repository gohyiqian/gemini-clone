import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CenteredModals from "../components/CenteredModals";
import ThemeContext from "../ThemeContext";
import { useToken } from "../auth/useToken";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/VisibilityOff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const LoginPage = () => {
  const [token, setToken] = useToken();
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Need to put this line first
    const response = await axios.post("/api/login", {
      username: username,
      password: password,
    });
    const { token } = response.data;
    setToken(token);
    setStatus("Log Out");
    setShowModal(true); // modal pops up
    setTimeout(() => history.push("/wallet"), 2000);
  };

  return (
    <div className={`Login ${theme}`}>
      <img src={`./images/sm_logo_${theme}.png`} height="80px" alt="logo" />{" "}
      <br />
      <h2>Welcome Back</h2> <br />
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <Form onSubmit={handleSubmit}>
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
          <IconButton>
            <Visibility />
          </IconButton>
        </Form.Group>

        <br />
        {/* to change the route to 'api/user/wallet */}
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
