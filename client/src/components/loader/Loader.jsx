import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import spinner from "../../images/spinner.gif";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 250);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <img src={spinner} alt="Loading" />
      <h1>Fetching Data</h1>
    </div>
  );
}
