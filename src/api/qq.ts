import axios from 'axios';
import { IQQInfo } from '../model'

/**
 * 查询qq信息
 */
export function getQQInfo(params: { qq: string }) {
  return axios.request<IQQInfo>({
    method: 'get',
    url: 'https://api.uomg.com/api/qq.info',
    params,
  });
}
