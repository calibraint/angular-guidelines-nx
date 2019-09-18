import { ApiResultPagination } from './ApiResultPagination';
export interface ApiResponseType<T> {
  Status: string;
  Data: T;
  Messages: string;
  Pagination?: ApiResultPagination;
}

export interface ApiResponse extends ApiResponseType<any> {}
