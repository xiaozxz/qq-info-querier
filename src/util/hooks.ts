import { AxiosResponse } from 'axios';
import { useRef, useState } from 'react';

type Fn = (...args: any) => any;
type AxiosResponseFn<T> = (params: AxiosResponse<T, any>) => void;

/**
 * 防抖函数
 */
function useDebounce<T extends Fn>(fn: T, delay: number = 300) {
  const ref = useRef<NodeJS.Timeout | null>(null);
  return (...args: Parameters<T>) => {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(fn, delay, ...args);
  };
}

/**
 * axios简单封装
 */
function useAxios<T = any>(
  fn: (...args: any) => Promise<AxiosResponse<T>>,
  getResponseDo?: AxiosResponseFn<T>
) {
  const [loading, setLoading] = useState(false);
  const request = (params: any) => {
    setLoading(true);
    fn(params)
      .then((res: any) => {
        getResponseDo && getResponseDo(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { request, loading };
}

export { useDebounce, useAxios };
