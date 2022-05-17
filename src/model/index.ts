/**
 * QQ用户基础信息
 */
export interface IQQInfo {
  /**
   * 查询状态码
   */
  code: number;
  /**
   * qq号码
   */
  qq: string;
  /**
   * qq名称
   */
  name: string;
  /**
   * QQ头像地址
   */
  qlogo: string;
  /**
   * 绿钻相关信息
   */
  lvzuan: ILvzuan;
  /**
   * 错误提示信息！
   */
  msg?: string;
}

/**
 * 绿砖信息
 */
export interface ILvzuan {
  code: number;
  subcode: number;
  level: number;
  vip: number;
  score: number;
  place: number;
  payway: number;
  isyear: number;
  vendor: number;
}

/**
 * ajax查询错误信息
 */
export interface IQueryError {
  /**
   * 状态码
   */
  code: number;
  /**
   * 错误提示信息
   */
  msg?: string;
}
