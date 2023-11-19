import React, { FC } from "react";
import { IMessagesItem } from "../../../../types";

const MessagesItem: FC<IMessagesItem> = ({message,author,datetime}) => {
  return (
    <div className="border border-1 rounded-1 shadow-sm align-self-start py-3 px-3 mb-3 w-75">
      <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
        <span className="text text-primary">{author}</span>
        <span className="text text-secondary">{datetime}</span>
      </div>
      <p>
        {message}
      </p>
    </div>
  );
};

export default MessagesItem;
