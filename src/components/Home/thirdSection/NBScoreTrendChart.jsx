import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const NBScoreTrendChart = ({ chartData, labels }) => {
    const data = {
        labels,
        datasets: [{
            label: '',
            data: chartData,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBackgroundColor: '#FFFFFF',
            pointBorderColor: '#3B82F6',
            pointBorderWidth: 2,
            backgroundColor: '#3B82F6',
            borderColor: '#3B82F6',
            borderWidth: 2,
            fill: false,
            tension: 0.3,
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            datalabels: {
                display: true,
                align: 'top',
                offset: 10,
                backgroundColor: (context) => {
                    return context.dataIndex === (chartData.length - 1) ? '#EAB308' : '#06B6D4';
                },
                color: '#FFFFFF',
                font: {
                    size: 13,
                    weight: 'bold'
                },
                padding: {
                    top: 4,
                    bottom: 4,
                    left: 8,
                    right: 8
                },
                borderRadius: 4,
                formatter: (value) => value
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#9CA3AF',
                    font: {
                        size: 11
                    }
                }
            },
            y: {
                min: 300,
                max: 900,
                grid: {
                    borderDash: [3, 3],
                    color: '#E5E7EB',
                    drawBorder: false
                },
                ticks: {
                    stepSize: 100,
                    color: '#9CA3AF',
                    font: {
                        size: 11
                    }
                }
            }
        }
    };

    return (
        <div className="flex-1 pr-8">
            <div className="text-sm mb-6 text-gray-600">
                Trended view of the changes in your NB Score with every refresh.
            </div>
            <div style={{ height: '280px' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default NBScoreTrendChart;