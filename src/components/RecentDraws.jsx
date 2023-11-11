import React from 'react';

function RecentDraws({ historicalData }) {

  const numberOfRecords = 6;
  const lastRecords = historicalData.slice(0, numberOfRecords);

  return (
    <div className='item-1x2'>
      <h2>Recent games</h2>
      <div className='card-box'>
        {lastRecords.map((item, index) => (
          <div key={index + "_lastRecords"} className="card">
            {[0, 1, 2, 3, 4, 5, 6].map((N) => (
              <div key={N} className="circle">
                <b>{item.Numbers[N]}</b>
              </div>
            ))}
            <div className="circle yellow"><b>{item.Bonus}</b></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentDraws;