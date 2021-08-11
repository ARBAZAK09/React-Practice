import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userdata } from "../../Reducers/Config";
export const Courses = () => {
  const history = useHistory();
  useEffect(() => {
    if (!(userdata.token == localStorage.getItem("token", userdata.token))) {
      history.push("/Login");
    }
  }, []);
  return (
    <div>
      <h1>THis is Courses</h1>
    </div>
  );
};
