import React from 'react';

function NumberOccurrences({ historicalData }) {
  // Create an array to store the occurrences of numbers from 1 to 50
//   const numberOccurrences = Array(50).fill(0);
//   const occurrenceAverage = Array(50).fill(0);

    // Create an array to store number data for each number from 1 to 50
    // const numberData = Array(50).fill({ number: 0, occurrences: 0, average: 0 });// this causes an shared object inicialization
    const numberData = Array(50).fill().map(() => ({ number: 0, occurrences: 0, average: 0 }));

    // console.log("numberData",numberData);
  // Iterate through historicalData and count occurrences
//   historicalData.forEach((item) => {
//     item.Numbers.forEach((number) => {
//       if (number >= 1 && number <= historicalData.length) {
//         numberOccurrences[number - 1]++;
//       }
//     });
//   });
//   numberOccurrences.forEach((occurrences, index) => {
//     occurrenceAverage[index] = occurrences / historicalData.length
//   });

// Iterate through historicalData and count occurrences
historicalData.forEach((item) => {
    item.Numbers.forEach((number) => {
      if (number >= 1 && number <= historicalData.length) {
        const index = number - 1;
        numberData[index].number = number;
        numberData[index].occurrences++;
      }
    });
  });

  // Calculate averages
  numberData.forEach((data) => {
    if (data.occurrences > 0) {
      data.average = data.occurrences / historicalData.length;
    }
  });

  // Render the results
//   return (
//     <div>
//       {numberOccurrences.map((occurrences, index) => (
//         <div key={index}>
//           <span>Number {index + 1}</span>
//           <span>Occurrences {occurrences.toFixed(2)}</span>
//           <span>Occurrences {occurrenceAverage[index].toFixed(2)}</span>
//         </div>
//       ))}
//     </div>
//   );



//finally sort array to display teh info
const sortedNumberData = numberData.sort((s1, s2) => (s1.average < s2.average) ? 1 : (s1.average > s2.average) ? -1 : 0);

// Function to split the array into chunks of a specified size
function chunkArray(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
  
  // Split sortedNumberData into chunks of 5 elements each
  const chunkedData = chunkArray(sortedNumberData, 5);


// Render the grouped data
return (
    <div className='item-1x2'>
      {chunkedData.map((group, groupIndex) => (
        <div key={'group_' + groupIndex} className='group-container'>
          {group.map((data, index) => (
            <div key={'numberData_' + index} className='data-container'>
              <span className='number-data'>Number {data.number}</span>
              <span>Occurrences {data.occurrences}</span>
              <span>Average {data.average.toFixed(4)}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default NumberOccurrences;
