import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Subtract() {
  const [date, setDate] = useState('');
  const [days, setDays] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubtract = () => {
    if (!date || isNaN(days)) {
      setError('Please provide a valid date and a number.');
      return;
    }

    const newDate = new Date(date);
    if (isNaN(newDate)) {
      setError('Invalid date format.');
      return;
    }

    newDate.setDate(newDate.getDate() - parseInt(days));
    setResult(newDate.toLocaleDateString('en-GB'));
    setError('');
  };

  return (
    <div id="subtract">
    <div className='page'>
      <h2 className='op'>Subtract Days</h2>
      <form>
        <label>
          Date : 
          <br/>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Days to Subtract : 
          <br/>
          <input type="number" value={days} onChange={(e) => setDays(e.target.value)} />
        </label>
        <br />
        <button type="button" class="btn btn-secondary" onClick={handleSubtract}>Calculate</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p>New Date: {result}</p>}
      </div>
      <Link to="/">
        <button className=' btn btn-dark return'>Return Home</button>
      </Link>
    </div>
  );
}

export default Subtract;
