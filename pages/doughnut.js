import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const MyDoughnutChart = () => {
  const data = {
    labels: [], // empty array cause legent to be hidden
    datasets: [
      {
        label: 'My First Doughnut Chart',
        data: [28, 16, 6],
        backgroundColor: ['lightblue', 'blue', 'yellow'],
        hoverBackgroundColor: ['lightblue', 'blue', 'yellow'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <p>
        <a href="/">...back to Home Page</a>
      </p>
      <div
        style={{
          position: 'relative',
          width: '555px',
          height: '555px',
          border: '3px solid red',
        }}
      >
        <Doughnut data={data} options={options} />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '3px solid green',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p>50</p>
            <p>Applications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDoughnutChart;
