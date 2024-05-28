import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Count() {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleCount = () => {
    if (!date1 || !date2) {
      setError('Please provide both dates.');
      return;
    }

    const d1 = new Date(date1);
    const d2 = new Date(date2);
    if (isNaN(d1) || isNaN(d2)) {
      setError('Invalid date format.');
      return;
    }

    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setResult(diffDays);
    setError('');
  };

  return (
    <div>
    <div className='page'>
      <h2 className='op'>Count Days</h2>
      <form>
        <label>
          Start Date :
          <br/>
          <input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} />
        </label>
        <br />
        <label>
          End Date :
          <br/>
          <input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} />
        </label>
        <br />
        <button type="button" class="btn btn-secondary" onClick={handleCount}>Calculate</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p>Number of Days: {result}</p>}
    </div>
    <Link to="/">
        <button className='btn btn-dark return'>Return Home</button>
      </Link>
    </div>
  );
}

export default Count;
