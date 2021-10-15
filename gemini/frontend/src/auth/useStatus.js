import { useState } from "react";

export const useStatus = () => {
  const [status, setStatus] = useState("");
  status === "Log In" ? setStatus("Log Out") : setStatus("Log In");
  return [status, setStatus];
};
