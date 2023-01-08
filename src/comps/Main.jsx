import React, { useState, useEffect } from 'react'
import apiKey from '../const/apifetch';
//using tailwindcss
function Main() {
const [stockData, setStockData] = useState([]);
const [stockSymbol, setStockSymbol] = useState([]);
  const fetchStockData = async () => {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&datatype=json&limit=1&outputsize=1&symbol=${stockSymbol}&apikey=` + apiKey)
        const data = await response.json();
        await setStockData(Object.values(data['Time Series (Daily)']).at(-1));
        console.log(stockData);
    }

  return (
    <div className='h-screen'>
    <div className='flex text-white text-6xl place-content-center bg-red-300 h-20 p-2'>
        Stonks
    </div>
    <div className='flex place-content-center h-10 m-10'>
        <input type="text" onChange={(e) => setStockSymbol(e.target.value)} className='border-black outline-none w-19 rounded-l-lg' placeholder='Put Ticker Symbol Here'/>
<button onClick={fetchStockData} className='bg-red-300 text-white p-2'><img src="http://media.lib.byu.edu/assets/images/searchbar/1.0/search-icon.svg" alt="" /></button>
    </div>
    <div className='flex-col justify-content: center items-center text-center'>
        <p>Please Do not spam</p>
        <h1 className='text-4xl mt-10'>{stockSymbol}</h1>
        <h1 className='text-4xl mt-10'>Open: {stockData['1. open']}</h1>
        <h1 className='text-4xl mt-10'>High: {stockData['2. high']}</h1>
        <h1 className='text-4xl mt-10'>Low: {stockData['3. low']}</h1>
        <h1 className='text-4xl mt-10'>Close: {stockData['4. close']}</h1>
    </div>
</div>
  )
}

export default Main