import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { AppConfig } from '../config/app.config';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Title,
    Tooltip,
    Legend,
);

interface ConversionRateData {
    conversionRate: number;
    createdAt: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data: ConversionRateData[];
}

type PeriodOption = '24h' | '7d' | '30d';

const ConversionRate: React.FC = () => {
    const [data, setData] = useState<ConversionRateData[]>([]);
    const [period, setPeriod] = useState<PeriodOption>('24h');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<ApiResponse>(
                    `${AppConfig.BACKEND_API_BASE_URL}/conversion-rate?period=${period}`,
                );
                if (response.data.success) {
                    setData(response.data.data);
                } else {
                    setError(response.data.message || 'Failed to fetch data');
                }
            } catch (err) {
                setError('Error connecting to the server');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [period]);

    const chartData = {
        datasets: [
            {
                label: 'Conversion Rate',
                data: data.map(item => ({
                    x: new Date(item.createdAt),
                    y: item.conversionRate,
                })),
                borderColor: '#0A65FF',
                backgroundColor: 'rgba(10, 101, 255, 0.1)',
                tension: 0.3,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time' as const,
                time: {
                    unit: 'hour' as const,
                },
                title: {
                    display: true,
                    text: 'Time',
                    color: '#fff',
                },
                ticks: {
                    color: '#aaa',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
            y: {
                // set up manually so we don't have visual spikes because of the seed data
                min: 1.045,
                max: 1.05,
                title: {
                    display: true,
                    text: 'Conversion Rate',
                    color: '#fff',
                },
                ticks: {
                    color: '#aaa',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff',
                },
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        return `Rate: ${Number(context.raw.y).toFixed(8)}`;
                    },
                },
            },
        },
    };

    const handlePeriodChange = (newPeriod: PeriodOption) => {
        setPeriod(newPeriod);
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="mb-12">
                <h1 className="text-3xl font-bold mb-4">Conversion Rate</h1>
                <p className="text-lg text-gray-300">
                    Conversion rate represents the ratio of total assets to total supply, which
                    measures the protocol's underlying performance and capital efficiency over time.
                </p>
            </div>

            {/* Period Selection */}
            <div className="mb-6 flex justify-end">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    {['24h', '7d', '30d'].map(option => (
                        <button
                            key={option}
                            type="button"
                            className={`px-4 py-2 text-sm font-medium 
                ${
                    period === option
                        ? 'bg-primary text-white'
                        : 'bg-surface text-gray-300 hover:bg-gray-700'
                }
                ${option === '24h' ? 'rounded-l-lg' : ''}
                ${option === '30d' ? 'rounded-r-lg' : ''}
                border-r border-gray-700
              `}
                            onClick={() => handlePeriodChange(option as PeriodOption)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart */}
            <div className="bg-surface rounded-lg p-6 h-96">
                {loading ? (
                    <div className="h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : error ? (
                    <div className="h-full flex items-center justify-center text-red-500">
                        {error}
                    </div>
                ) : data.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-gray-400">
                        No data available for the selected period
                    </div>
                ) : (
                    <Line data={chartData} options={chartOptions} />
                )}
            </div>
        </div>
    );
};

export default ConversionRate;
