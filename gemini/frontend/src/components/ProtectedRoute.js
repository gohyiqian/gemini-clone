import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          // if authenticated, return the page
          if (isAuth) {
            return <Component />;
          }
          // if not, redirect to hompage from whatever location it is called
          else
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            );
        }}
      />
    </>
  );
}

export default ProtectedRoute;
