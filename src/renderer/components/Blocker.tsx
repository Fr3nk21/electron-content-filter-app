import React, { useState } from 'react';
import BlockedList from './BlockedList';

type Props = {};

const Blocker = (props: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [blockedList, setBlockedList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddToList = () => {
    if (inputValue.trim()) {
      setBlockedList((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <div className='blocker'>
        <h1>This is the blocker</h1>
        <input
          placeholder='Select a website you want to block'
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleAddToList}>Add to Blocked List</button>
      </div>
      <div className='list'>
        <BlockedList blockedList={blockedList} />
      </div>
    </div>
  );
};

export default Blocker;
