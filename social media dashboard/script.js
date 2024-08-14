// Sample data for the charts with different colors for each day
const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
      label: 'Stat',
      data: [1200, 1100, 1000, 900, 800, 700, 600],
      backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 87, 34, 0.2)'
      ],
      borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 87, 34, 1)'
      ],
      borderWidth: 1
  }]
};

// Create charts for each stat
const followersChart = new Chart(document.getElementById('followersChart'), {
  type: 'bar',
  data: chartData,
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

const likesChart = new Chart(document.getElementById('likesChart'), {
  type: 'line',
  data: chartData,
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

const retweetsChart = new Chart(document.getElementById('retweetsChart'), {
  type: 'pie',
  data: chartData,
  options: {}
});

const impressionsChart = new Chart(document.getElementById('impressionsChart'), {
  type: 'doughnut',
  data: chartData,
  options: {}
});

// Additional charts
const dataSet1Chart = new Chart(document.getElementById('dataSet1Chart'), {
  type: 'bar',
  data: chartData,
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

const dataSet2Chart = new Chart(document.getElementById('dataSet2Chart'), {
  type: 'line',
  data: chartData,
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

const dataSet3Chart = new Chart(document.getElementById('dataSet3Chart'), {
  type: 'pie',
  data: chartData,
  options: {}
});

const dataSet4Chart = new Chart(document.getElementById('dataSet4Chart'), {
  type: 'doughnut',
  data: chartData,
  options: {}
});