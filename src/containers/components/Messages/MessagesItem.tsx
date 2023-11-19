import React from 'react';

const MessagesItem = () => {
  return (
    <div className="border border-1 rounded-1 shadow-sm align-self-start py-3 px-3 mb-3 w-75">
      <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
        <span className="text text-primary">Author</span>
        <span className="text text-secondary">01.02.2024</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias
        distinctio doloribus itaque laboriosam magnam, non, nostrum omnis
        praesentium provident reprehenderit sequi vero voluptate. Eum?
      </p>
    </div>
  );
};

export default MessagesItem;
