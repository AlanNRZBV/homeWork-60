import React from "react";
import MessagesItem from "./MessagesItem.tsx";

const Messages = () => {
  return (
    <div className="py-3 d-flex flex-column overflow-auto">
      <MessagesItem/>
    </div>
  );
};

export default Messages;