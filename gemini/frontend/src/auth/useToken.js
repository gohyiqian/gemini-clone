import { useState } from "react";

export const useToken = () => {
  // if token exists, use that token
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });

  // else create and store new token
  const setToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setTokenInternal(newToken);
  };

  return [token, setToken];
};
