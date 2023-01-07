import React from 'react'
import fetchStockData from '../const/apifetch'
import Card from './Card'

function Main() {
  return (
    <div className='h-screen'>
        <div className='flex text-white text-6xl place-content-center bg-red-300 h-20 p-2'>
            Stonks
        </div>
        <div className='flex place-content-center h-10 m-10'>
            <input type="text" className='border-black outline-none w-19 rounded-l-lg' />
            <button onClick={fetchStockData} className='bg-blue-500 text-white p-2'><img src="http://media.lib.byu.edu/assets/images/searchbar/1.0/search-icon.svg" alt="" /></button>
        </div>
        <Card/>
    </div>
  )
}

export default Main