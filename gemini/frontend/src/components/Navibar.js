import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import ThemeChangerButton from "./ThemeChangerButton";
import ThemeContext from "../ThemeContext";
// import { status, useStatus } from "../auth/useStatus";

const Navibar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar fixed-top navbar-${theme} bg-${theme}`}
      >
        <Link to="/">
          <img
            className="mainLogo"
            src={`./images/logo_${theme}.png`}
            alt="logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Link className={`${theme}`} to="/products">
            Products
          </Link>
          <Link className={`${theme}`} to="/prices">
            Crypto Prices
          </Link>
          <Link className={`${theme}`} to="/academy">
            Academy
          </Link>
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
            />
          </form>
          <Button variant="secondary" id="responsive-navbar-nav">
            <Link className={`${theme}`} to="/login">
              Log In
            </Link>
          </Button>
          <Button variant="secondary" id="responsive-navbar-nav">
            <Link className={`${theme}`} to="/signup">
              Sign Up
            </Link>
          </Button>
          <ThemeChangerButton />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navibar;
