import React from 'react';
import TaskCard from "./components/Task-card";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import taskListData from "./task-list.json";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
        return (
            <div>
                <h1>Goit-react-hw-01-components</h1>
                <TaskCard taskList={taskListData}>
                <Profile dataType="Profile" name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} /> 
                <Statistics dataType="Statistics"
                title="Upload stats"
                key={statisticalData.id}
                stats={statisticalData}
            /> 
                    <Statistics
                    dataType="Statistics"
                    stats={statisticalData} />
                    <FriendList dataType="FriendList" friends={friends} />
                    <TransactionHistory dataType="TransactionHistory" items={transactions} />
                </TaskCard>
              
     </div>
    );
};
export default App;


