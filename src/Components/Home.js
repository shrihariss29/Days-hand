import React from 'react';

function Home() {
  return (
    <div>
      <h1 id='name'>Day<span style={{ color: 'red' }}>s </span><span style={{ color: 'red' }}>h</span>and</h1>
      <div className='intro'>
        <h1 className='intro1'>Time is precious</h1>
        <h4 className='intro1'>Calculate your dates and know how much it means to you.</h4>
        <ul>
          <li>You can add specific number of days to a day.</li>
          <li>You can subtract specific number of days from a day.</li>
          <li>You can count number of days between two dates.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
