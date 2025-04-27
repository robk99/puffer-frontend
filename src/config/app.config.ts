import dotenv from 'dotenv';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

const envPath = isProd ? path.join(process.cwd(), '.env') : path.join(process.cwd(), 'dev.env');

dotenv.config({
    path: envPath,
});

export const AppConfig = {
    IS_PRODUCTION: isProd,
    NODE_ENV: process.env.NODE_ENV as string,
    BACKEND_API_BASE_URL: process.env.BACKEND_API_BASE_URL as string
};
