import { useState, useEffect } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });

      try {
        const response = await fetch(url, { ...options, signal });
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }
        const result: T = await response.json();
        setState({ data: result, loading: false, error: null });
      } catch (err) {
        if (signal.aborted) {
          return;
        }
        setState({ data: null, loading: false, error: (err as Error).message });
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);
  return state;
}
