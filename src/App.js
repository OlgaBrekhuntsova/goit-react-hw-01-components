import React from 'react';
import Container from './components/Container/Container';
import TaskCard from "./components/TaskCard/TaskCard";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import taskListData from "./task-list.json";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
        return (
            <Container>
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
              
     </Container>
    );
};
export default App;


