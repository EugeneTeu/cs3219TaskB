export type ApiResponse<T> = {
    message: string;
    data: T;
};

export type Quote = {
    title: string;
    _v: number;
    _id: string;
};
