import React from 'react';

type Props = {
  blockedList: string[];
};

const BlockedList = ({ blockedList }: Props) => {
  return (
    <div>
      <h1>This is the blocked list</h1>
      <ul>
        {blockedList.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlockedList;
