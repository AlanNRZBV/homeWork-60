import { FC } from 'react';
import MessagesItem from './MessagesItem.tsx';
import { IMessages } from '../../../../types';
import moment from 'moment';

const Messages: FC<IMessages> = ({ messages }) => {
  const formatDate = (date: string | undefined) => {
    return moment(date).format('MMM Do YY, h:mm:ss a');
  };

  return (
    <div className="py-3 d-flex flex-column overflow-auto">
      {messages.map((item) => {
        return (
          <MessagesItem
            message={item.message}
            author={item.author}
            datetime={formatDate(item.datetime)}
            key={item._id}
          />
        );
      })}
    </div>
  );
};

export default Messages;
