export interface BaseHttpResponse<T> {
    success: boolean;
    message: string;
    data: T;
}
