import React from 'react';
import './Chart.css';
import Chartbar from './ChartBar';

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValue)
  return (
    <div className='chart'>
      {props.dataPoints.map((data) => (
        <Chartbar key={data.id} value={data.value} maxValue={totalMax} label={data.label} />
      ))}
    </div>
  );
};

export default Chart;
