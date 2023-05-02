import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const MyDoughnutChart = () => {
  const data = {
    labels: [], // empty array cause legent to be hidden
    datasets: [
      {
        label: 'My First Doughnut Chart',
        data: [25, 75],
        backgroundColor: ['blue', 'grey'],
        hoverBackgroundColor: ['blue', 'grey'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    borderWidth: 0,
    borderDash: [11],
  };

  return (
    <div>
      <p>
        <a href="/">...back to Home Page</a>
      </p>
      <p>
        <a href="/doughnut-1">Doughnut 1 chart example</a>
      </p>

      <div
        style={{
          position: 'relative',
          width: '222px',
          height: '222px',
          border: '3px solid lightgrey',
        }}
      >
        <Doughnut data={data} options={options} />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: '0px', color: 'blue' }}>25</h1>
            <p style={{ margin: '0px', color: 'grey' }}>%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDoughnutChart;
