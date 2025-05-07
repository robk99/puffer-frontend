import { useState } from 'react';
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
import {
    PERIOD_OPTIONS,
    PeriodOption,
    useConversionRateData,
} from '../../hooks/useConversionRateData';
import { useConversionRateChart } from '../../hooks/useConversionRateChart';

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

const ConversionRate = () => {
    const [period, setPeriod] = useState<PeriodOption>('24h');
    const { data, loading, error } = useConversionRateData(period);
    const { chartData, chartOptions } = useConversionRateChart(data);

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
                    {PERIOD_OPTIONS.map(option => (
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
