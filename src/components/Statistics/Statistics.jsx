import React from "react";
import PropTypes from 'prop-types';


const Statistics = ({ title, stats}) => {
    
    return (
        <div className="statistics">
             { title && (<h3 className="title">{ title}</h3>)}
            <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className="item">
                        <span className="label">{ label}</span>
                        <span className="percentage">{percentage }%</span>
                    </li>
                )
                )} 
            </ul>
        </div>
    );
};

Statistics.defaultProps = {
    title: "",
    // stats.percentage: 0,
};
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
percentage: PropTypes.number,
    })).isRequired,

};
export default Statistics;