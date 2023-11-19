import { FC } from 'react';
import MessagesItem from './MessagesItem.tsx';
import { IMessages } from '../../../../types';

const Messages: FC<IMessages> = ({ messages }) => {
  return (
    <div className="py-3 d-flex flex-column overflow-auto">
      {messages.map((item) => (
        <MessagesItem
          message={item.message}
          author={item.author}
          datetime={item.datetime}
          key={item._id}
        />
      ))}
    </div>
  );
};

export default Messages;
