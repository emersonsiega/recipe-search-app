type ApiResponse<T> = {
  data: T;
  message?: string;
  statusCode?: number;
};

export { ApiResponse };
