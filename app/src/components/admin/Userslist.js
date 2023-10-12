import React from "react";


const Admin = props => {
return (
  
    <ul>
      {props.users.map((user) => {
        <li key={user.id}>
          {Admin.Product} ({Admin.Price} totalValue)
        </li>;
      })}
    </ul>
  
);
};

export default Admin;