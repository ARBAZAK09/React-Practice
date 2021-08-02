import React, { useState } from "react";

const Counter = () => {
  const [data, setData] = useState(0);
  // const [personName,setPersonName]=useState(false)

  return (
    <div>
      <button onClick={() => setData(data+1)}>Increment</button>
      <button onClick={() => setData(data- 1)}>Decrement</button>
      <button>{data}</button>

      {/* <h1>Toggling</h1>
      <button onClick={()=>setPersonName(!personName)}>Change Name</button><br/>
      {personName ? <h1>Jawwad</h1> :<h1>Arbaz</h1>}
       */}
    </div>
  );
};

export default Counter;
