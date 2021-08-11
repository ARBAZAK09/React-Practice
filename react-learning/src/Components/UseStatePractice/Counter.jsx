import React, { useState } from "react";
import axios from "axios";

const Counter = () => {
  const [data, setData] = useState(0);
  // const [personName,setPersonName]=useState(false)
  const handleap1 = () => {
    axios.get("http://localhost:4000/emp").then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <button onclick={() => setData(data + 1)}>Increment</button>
      <button onClick={() => setData(data - 1)}>Decrement</button>
      <button onClick={handleap1}>call my api</button>
      <button>{data}</button>

      {/* <h1>Toggling</h1>
      <button onClick={()=>setPersonName(!personName)}>Change Name</button><br/>
      {personName ? <h1>Jawwad</h1> :<h1>Arbaz</h1>}
       */}
    </div>
  );
};

export default Counter;
