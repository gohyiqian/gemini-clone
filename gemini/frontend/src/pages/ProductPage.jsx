import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ProductPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`Login ${theme}`}>
      <h1>Our Products</h1>
      <p>Sign up now to experience it yourself!</p>
      <Button size="md" variant="info">
        <Link style={{ "text-decoration": "none" }} to="/signup">
          Sign Up Now
        </Link>
      </Button>
    </div>
  );
};

export default ProductPage;
