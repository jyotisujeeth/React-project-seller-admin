import React from "react";
import card from "../UI/Card";

const Admin = props => {
return (
  <Card className={classes.product}>
    <ul>
      {props.users.map((user) => {
        <li key={user.id}>
          {Admin.Product} ({Admin.Price} totalValue)
        </li>;
      })}
    </ul>
  </Card>
);
};

export default Admin;