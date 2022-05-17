import React, { useState } from 'react';
import { getQQInfo } from '../../api/qq';
import { IQQInfo } from '../../model';
import { useAxios, useDebounce } from '../../util/hooks';
import { isQQNumber } from '../../util/validators';
import { QQInfo } from '../QQInfo';
import styles from './QQQuerier.module.scss';

const QQQuerier: React.FC = () => {
  const [qqNumber, setQQNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [qqInfo, setQQInfo] = useState<IQQInfo | null>();

  const { request, loading } = useAxios<IQQInfo>(getQQInfo, (res) => {
    if (res.data.code === 1) {
      setQQInfo(res.data);
    } else {
      setErrorMsg(res.data.msg || 'qq号查询异常');
      setQQInfo(null);
    }
  });

  const searchQQ = useDebounce((qq: string) => {
    if (isQQNumber(qq)) {
      setQQInfo(null);
      request({ qq });
    } else {
      setErrorMsg('请输入正确的QQ号码');
    }
  }, 800);

  const clearInput = () => {
    setQQNumber('');
  };

  const changeQQ = (qq: string) => {
    setErrorMsg('');
    setQQNumber(qq);
    searchQQ(qq);
  };

  return (
    <div className={styles['qq-querier']}>
      <h1 className={styles['qq-querier-header']}>QQ号查询</h1>

      <main>
        <div className={styles['search-warp']}>
          <div className={styles['search-input-row']}>
            <label>
              <span className={styles['search-input-title']}>QQ</span>
              <input
                className={styles['search-input']}
                value={qqNumber}
                placeholder={'输入后查询'}
                onChange={(e) => changeQQ(e.target.value)}
              />
              <i
                className={styles['circle-clear']}
                title="清空输入"
                onClick={clearInput}
              ></i>
            </label>
          </div>
          {loading && <div className={styles['search-loading']}>查询中</div>}
          {errorMsg && (
            <div className={styles['search-error-row']}>{errorMsg}</div>
          )}
        </div>

        {qqInfo && <QQInfo {...qqInfo} />}
      </main>
    </div>
  );
};

export { QQQuerier };
