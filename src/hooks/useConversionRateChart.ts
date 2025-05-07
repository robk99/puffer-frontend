import { ConversionRateData } from './useConversionRateData';

export const useConversionRateChart = (data: ConversionRateData[]) => {
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
                time: { unit: 'hour' as const },
                title: { display: true, text: 'Time', color: '#fff' },
                ticks: { color: '#aaa' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
            },
            y: {
                min: 1.045,
                max: 1.05,
                title: { display: true, text: 'Conversion Rate', color: '#fff' },
                ticks: { color: '#aaa' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
            },
        },
        plugins: {
            legend: { labels: { color: '#fff' } },
            tooltip: {
                callbacks: {
                    label: (ctx: any) => `Rate: ${Number(ctx.raw.y).toFixed(8)}`,
                },
            },
        },
    };

    return { chartData, chartOptions };
};
