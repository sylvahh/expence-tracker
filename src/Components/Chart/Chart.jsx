import React, { useEffect, useRef } from 'react';
import './Chart.css';
import Chart from 'chart.js/auto';


const ExpensesChart = (props) => {
  const dataPointLabel = []
  const dataPointValue = props.dataPoints.map((dataPoint, index) => {
    dataPointLabel.push(dataPoint.label) 
    return dataPoint.value
  });

  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = document.getElementById('expenseChart');
   
    // Destroy existing chart instance if it exists
     if (chartRef.current !== null) {
      chartRef.current.destroy();
    }
    const chart =  new Chart(ctx, {
      type: 'line',
      data: {
        labels: 
        dataPointLabel
        ,
        datasets: [
          {
            label: `Expeneses`,
            data: [...dataPointValue,],
            borderWidth: 1,
            backgroundColor: [
              '#a892ee',
            ],
            borderColor: [
              '#40005D',
            ],
          },
        ],
      },
  
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive:true
      },
    });
  chartRef.current=chart

  }, [dataPointValue])
  

  return (
    <canvas className='chart' id='expenseChart'>
      
      
    </canvas>
  );
};

export default ExpensesChart;

