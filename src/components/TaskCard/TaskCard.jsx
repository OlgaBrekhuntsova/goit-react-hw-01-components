import React from "react";
import PropTypes from 'prop-types';

const TaskCard = ({ taskList, children }) => {
        return (
       taskList.map(({ id, name }) => (
                    <section key={id} className="task-card-item">
               <h2 className="task-title">{name}</h2>
                  
                {/* {(() => {
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
               })()} */}
               {id === "profile" && (children.filter(child => child.props.dataType === "Profile"))}
               {id === "statistics" && (children.filter(child => child.props.dataType === "Statistics"))}
               {id === "friendList" && (children.filter(child => child.props.dataType === "FriendList"))}
                { id==="transactionHistory" && (children.filter(child => child.props.dataType === "TransactionHistory"))}
                </section>
            )
            )
                );
   };
TaskCard.defaultProps = {
    children: []
};

TaskCard.propTypes = {
    taskList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
    })).isRequired,
    children: PropTypes.node,

  };
export default TaskCard;