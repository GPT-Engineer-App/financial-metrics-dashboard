import React from 'react';
import PropTypes from 'prop-types';

const DashboardMetric = ({ name, value, trend }) => {
  return (
    <div className="dashboard-metric">
      <h3 className="metric-name">{name}</h3>
      <p className="metric-value">{value}</p>
      <div className="metric-trend">
        {trend.map((point, index) => (
          <span key={index} className="trend-point">
            {point}
          </span>
        ))}
      </div>
    </div>
  );
};

DashboardMetric.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  trend: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default DashboardMetric;