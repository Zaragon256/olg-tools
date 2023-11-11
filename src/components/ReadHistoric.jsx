    import React, { useEffect, useState } from 'react';
    import NumberOccurrences from './NumberOccurrences';
    import RecentDraws from './RecentDraws';

    function ReadHistoric() {
    const [historicalData, setHistoricalData] = useState([]);

    useEffect(() => {
        // Fetch the JSON file
        fetch('/data/historicgames.json')
        .then((response) => response.json())
        .then((jsonData) => {
            // Update the state with the JSON data
            setHistoricalData(jsonData);
        })
        .catch((error) => {
            console.error('## Error loading JSON:', error);
        });
    }, []); // Empty dependency array to run this effect only once

    console.log("paso3");

    return (
        <div className='container'>
            <RecentDraws historicalData={historicalData} className='asdf'/>
            <NumberOccurrences historicalData={historicalData} />
        </div>
    );
    }

    export default ReadHistoric;
