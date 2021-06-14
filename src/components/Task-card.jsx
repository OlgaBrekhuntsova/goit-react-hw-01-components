import React from "react";
import PropTypes from 'prop-types';

const TaskCard = ({ taskList, children }) => {
        return (
       taskList.map(({ id, name }) => (
                    <section key={id} className="task-card-item">
               <h2 className="task-title">{name}</h2>
                   {(() => {
                   switch (id) {
                       case "profile":
                          return children.filter(child => child.props.dataType === "Profile");
                        
                       case "statistics":
                           return (children.filter(child => child.props.dataType === "Statistics"));
                                              
                       case "friendList":
                       return children.filter(child => child.props.dataType === "FriendList");
                        
                       case "transactionHistory":
                           return children.filter(child => child.props.dataType === "TransactionHistory");
                        
                       default:
                           console.log("Sorry, there isn't such task in a list.")
                   }
               })()} 
                                 </section>
            )
            )
                );
   };


// TaskCard.propTypes = {
// // key: PropTypes.string.isRequired,
//  taskName: PropTypes.string.isRequired,
//   };
export default TaskCard;