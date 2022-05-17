import React from 'react';
import { IQQInfo } from '../../model';
import styles from './QQInfo.module.scss';

const QQInfo: React.FC<IQQInfoProps> = (props) => {
  return (
    <div className={styles['qq-info']}>
      <div className={styles['qq-info-left']}>
        {props.qlogo && (
          <img
            alt={'加载中'}
            className={styles['qq-info-avatar']}
            src={props.qlogo}
          />
        )}
      </div>
      <div className={styles['qq-info-right']}>
        <div className={styles['qq-info-name']} title={props.name}>
          {props.name || '--'}
        </div>
        <div className={styles['qq-info-number']}>{props.qq}</div>
      </div>
    </div>
  );
};

interface IQQInfoProps extends IQQInfo {}

export { QQInfo };
