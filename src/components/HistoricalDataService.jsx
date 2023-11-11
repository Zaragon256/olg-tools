import React from 'react';

export async function fetchHistoricalData() {
  try {
    const response = await fetch('/data/historicgames.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response;
    return jsonData;
  } catch (error) {
    console.error('## Error loading JSON:', error);
    throw error; // Re-throw the error for handling in components
  }
}