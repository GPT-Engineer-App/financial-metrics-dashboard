import React from 'react';

const Chart = () => {
  const data = [10, 20, 15, 30, 25, 35, 40];
  const maxDataValue = Math.max(...data);
  const svgHeight = 400;
  const svgWidth = 600;
  const padding = 40;
  const chartHeight = svgHeight - 2 * padding;
  const chartWidth = svgWidth - 2 * padding;

  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * chartWidth + padding;
    const y = svgHeight - padding - (point / maxDataValue) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div style={{ 
      width: '100%', 
      height: '400px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      border: '2px dashed #ccc', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <svg width={svgWidth} height={svgHeight}>
        <polyline 
          fill="none" 
          stroke="#0074d9" 
          strokeWidth="2" 
          points={points} 
        />
      </svg>
    </div>
  );
};

export default Chart;