import React from "react";

const UserData = ({ data, onShow }) => {
  // console.log(data);
  return (
    <div>
       <h2>{data.id}</h2> 
      <h2>{data.email}</h2>
      {/* <h2>{data.first_name}</h2> */}
      {/* <h2>{data.last_name}</h2>  */}
      <button className="container__btn" onClick={()=>{onShow(data)}}>Click Me</button><hr/>
    </div>
  );
};

export default UserData;
