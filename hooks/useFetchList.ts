interface FakeJsonReponse<T>{
    [key:string]: T[] | number;
    total: number;
    skip: number;
    limit: number;
}

interface FetchParams {
  limit?: number;
  skip?: number;
  search?: string;
  select?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

// Interface cho state của hook
interface UseFetchListState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  total: number;
  skip: number;
  limit: number;
  hasMore: boolean;
}

// Interface cho các action của hook
interface UseFetchListActions {
  refetch: () => void;
  loadMore: () => void;
  setSearch: (search: string) => void;
  setLimit: (limit: number) => void;
  setSortBy: (sortBy: string, order?: 'asc' | 'desc') => void;
  reset: () => void;
}


export function useFetchList<T>(
   
){
    return;

}