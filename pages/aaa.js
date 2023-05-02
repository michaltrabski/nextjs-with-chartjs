import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const MyDoughnutChart = () => {
  const data = {
    labels: [], // empty array cause legent to be hidden
    datasets: [
      {
        label: 'My First Doughnut Chart',
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '1100px', height: '1100px' }}>
      <div style={{ border: '3px solid red' }}>
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
          <p>Dodatkowy text</p>
        </div>
      </div>
    </div>
  );
};

export default MyDoughnutChart;
