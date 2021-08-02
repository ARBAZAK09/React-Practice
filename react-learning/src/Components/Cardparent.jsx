import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Cardchild } from "./Cardchild";
import { Cardxyz } from "./Reducers/Cardxyz";

export const Cardparent = () => {
  const [empArr, setEmpArr] = useState(Cardxyz.Data);
  const [searchtxt, setsearchtext] = useState("");
  //usestateEffect
  useEffect(() => {
    const filterArr = empArr.filter(
      (item) =>
        item.employeeName.toLowerCase().includes(searchtxt.toLowerCase()) ||
        item.employeeid.toLowerCase().includes(searchtxt.toLowerCase())
    );
    if (searchtxt === "") setEmpArr(Cardxyz.Data);
    else setEmpArr(filterArr);
  }, [searchtxt]);

  return (
    <div>
      <h1>EmployeeList</h1>
      <Form.Control
        type="text"
        placeholder="search here"
        onChange={(e) => setsearchtext(e.target.value)}
      ></Form.Control>
      {empArr.map((item) => (
        <Cardchild itemcurrent={item} />
      ))}
      ;
    </div>
  );
};
