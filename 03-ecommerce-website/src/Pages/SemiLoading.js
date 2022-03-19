import React from 'react';

const SemiLoading = () => {
  return (
    <div className='semi-loader'>
      <div className='bouncing-loader'>
        <span style={{ style: '--order : 1' }}></span>
        <span style={{ style: '--order : 2' }}></span>
        <span style={{ style: '--order : 3' }}></span>
      </div>
    </div>
  );
};

export default SemiLoading;
