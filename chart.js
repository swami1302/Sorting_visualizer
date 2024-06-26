const chartContext = document.getElementById('timeComplexityChart').getContext('2d');
        const timeComplexityChart = new Chart(chartContext, {
            type: 'bar',
            data: {
                labels: ['Bubble Sort Best', 'Bubble Sort Worst', 'Insertion Sort Best', 'Insertion Sort Worst'],
                datasets: [{
                    label: 'Best Case',
                    
                    data: [1, 2, 1, 2], // For demonstration, replace with numerical values if needed
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                },
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });