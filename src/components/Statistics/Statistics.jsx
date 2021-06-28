import React from "react";
import PropTypes from 'prop-types';
import colorGenerator from './colorGenerator';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats}) => {
    
    return (
        <div className={styles.statistics}>
             { title && (<h3 className={styles.title}>{ title}</h3>)}
            <ul className={styles.stat_list}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className={styles.item } style={{backgroundColor: colorGenerator() }}>
                        <span className={styles.label}>{ label}</span>
                        <span className={styles.percentage}>{percentage }%</span>
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