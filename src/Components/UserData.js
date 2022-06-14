import React from "react";

const UserData = ({ data, showData }) => {
  // console.log(data);
  return (
    <div>
      <button className="container__btn" onClick={() => showData(data)}>
        {data.id}
      </button>
      <hr />
    </div>
  );
};

export default UserData;
