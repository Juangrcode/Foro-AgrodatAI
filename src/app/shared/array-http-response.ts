export interface ArrayHttpResponse<T> {
    results: T[];
    count: number;
    prev: string;
    next: string;
}
