import React from "react";
import UserData from "./UserData";

const User = (props) => {
  //   console.log(props.data);
  return (
    <div>

      {props.data.map((data) => {
        return <UserData data={data} onShow={props.onShow} />;
      })}
    </div>
  );
};

export default User;
