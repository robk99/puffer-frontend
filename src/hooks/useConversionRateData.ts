import { useEffect, useState } from 'react';
import axios from 'axios';
import { AppConfig } from '../config/app.config';
import { BaseHttpResponse } from '../types/http/http.response';

export interface ConversionRateData {
    conversionRate: number;
    createdAt: string;
}

interface Response extends BaseHttpResponse<ConversionRateData[]> {}

export type PeriodOption = '24h' | '7d' | '30d';
export const PERIOD_OPTIONS: PeriodOption[] = ['24h', '7d', '30d'];

export const useConversionRateData = (period: PeriodOption) => {
    const [data, setData] = useState<ConversionRateData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get<Response>(
                    `${AppConfig.BACKEND_API_BASE_URL}/conversion-rate?period=${period}`,
                );
                if (res.data.success) {
                    setData(res.data.data);
                } else {
                    setError(res.data.message || 'Failed to fetch data');
                }
            } catch {
                setError('Error connecting to the server');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [period]);

    return { data, loading, error };
};
