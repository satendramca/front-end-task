import React from "react";
import UserData from "./UserData";
import { useState, useEffect } from "react";

const User = (props) => {
    const [userData, setData] = useState([]);
    const [selectedData, setSelectedData] = useState([{}]);

    const showData = (item)=>{
      fetch(`https://reqres.in/api/users/${item.id}`)
        .then(res => res.json())
        .then(
          (result) => {
            setSelectedData([result.data]);
          },
          (error) => {
            console.error(error);
            setData([]);
          }
        )
    }
    
    useEffect(() => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(
          (result) => {
            setData(result.data);
          },
          (error) => {
            console.error(error);
            setData([]);
          }
        )
    }, []);
    

  return (
    <div>
      <h3>{selectedData[0].id}</h3>
      <h3>{selectedData[0].email}</h3>
      <h3>{selectedData[0].first_name}</h3>
      <h3>{selectedData[0].last_name}</h3>
      {userData.map((data) => {
        return <UserData key={data.id} data={data} showData={showData} />;
      })}
    </div>
  );
};

export default User;
