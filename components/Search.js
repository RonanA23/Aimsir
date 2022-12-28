import React from 'react'
import Search from 'antd/lib/transfer/search'
import { useState } from 'react'

const SearchC = ({callData}) => {

  const[term,setTerm]=useState('')

  const searchHandler=(e)=>{
    console.log('Term is',term)
    callData(e)
  }

  return (
    <div className='bg-red-400 w-[300px] mx-auto p-8 m-4 rounded-lg'>
        <div className='bg-white rounded-lg p-0 flex'>
        <input className='rounded-lg' type='text' placeholder='Enter City' onChange={(e)=>setTerm(e.target.value)}/>
        <button className='bg-blue-600 rounded-lg p-2 ml-[-15px] flex items-center h-12 font-bold hover:bg-blue-700 '
        onClick={searchHandler}>Submit</button>
        </div>
    
    </div>
  )
}

export default SearchC