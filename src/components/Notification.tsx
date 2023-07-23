import { FC } from 'react';
import classNames from 'classnames';
import { NotificationType } from '../types';

type Props = {
  type: NotificationType;
};

export const Notification: FC<Props> = ({ type }) => (
  <p
    data-cy={type}
    className={classNames({
      'has-text-danger': type === NotificationType.LoadingError,
    })}
  >
    {
      type === NotificationType.LoadingError
        ? 'Something went wrong'
        : 'There are no people on the server'
    }
  </p>
);