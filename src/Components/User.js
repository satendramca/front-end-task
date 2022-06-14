import React from "react";
import UserData from "./UserData";

const User = (props) => {
    // console.log(props.selectedData[0]);
  return (
    <div>
      <h3>{props.selectedData[0].id}</h3>
      <h3>{props.selectedData[0].email}</h3>
      <h3>{props.selectedData[0].first_name}</h3>
      <h3>{props.selectedData[0].last_name}</h3>
      {props.data.map((data) => {
        return <UserData data={data} showData={props.showData} />;
      })}
    </div>
  );
};

export default User;
