import React from "react";
import Activity from "./Activity";
import "./ActivityList.css";

function ActivityList({activities}) {
  let list = activities.map((activity, index) => {
    return <Activity key={index} time={activity.time} description={activity.description} />
  });
     return (
     <div>
         <table>
           <tbody>
             {list}
           </tbody>
         </table>
      </div> 
     );
}

export default ActivityList;
