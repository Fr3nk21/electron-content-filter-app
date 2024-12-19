import React, { useState } from 'react';

type Props = {};

const Blocker = (props: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='blocker'>
      <h1>This is the blocker</h1>
      <input
        placeholder='Select a website you want to block'
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Blocker;
