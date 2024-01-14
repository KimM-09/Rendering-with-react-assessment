import React from "react";
import "./Activity.css";

function Activity({time, description}) {
  return (
   <tr>
      <td>{time}</td>
      <td>{description}</td>
   </tr>   
  );
}

export default Activity;
