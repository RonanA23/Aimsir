import React from 'react'
import Image from 'next/image'
//import * from '../styles/global.css'

function Card({data}) {


 if(!data){
    return<p>Loading...</p>
 }
 else {
    console.log('the dta is',data)
    let unix = data.sys.sunset;
    let sun = new Date(unix*1000);
    console.log('1 sunset at',sun.toTimeString().slice(0,5))

    

  // 2017-10-08T14:35:44.000Z
  return (
    <div className=' z-[1]  lg:p-5 rounded-lg absolute top-[50px] lg:left-[400px] w-[400px] lg:w-[600px] h-[400px] mb-[80px] '>   
        <div className='flex justify-between items-center w-[700px] z-[50]'>
       
        <div className='flex items-center justify-between lg:w-[600px]'>
          <div className=''>
          <Image src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='/' width={150} height={150}  />
        <i className='text-white text-2xl'>{data.weather[0].description}</i>
          </div>
          <div>
          <p className=" text-blue-300 text-8xl mb-[30px]"> {data.main.temp.toFixed(0)}°C</p>

          </div>
       
       

        </div>
        
        </div>

            
            <br/>

            <div className='mt-[30px] bg-black/40 w-[400px] lg:w-[600px] h-[166px] p-2 mb-8 rounded-2xl mx-auto'>
            <b className='text-gray-400 text-2xl ml-[100px]  lg:ml-[150px]'>Weather in {data.name}</b>
        <div className='flex justify-between mt-[50px]'>
          <div>
          <p className='text-white text-2xl'>{data.main.feels_like.toFixed(0)}°C</p>
          <i className=' text-white'>Feels Like</i>
          <br className='h-8'/>
       
          </div>
          <div className=''>
          <p className='text-white text-2xl'>{data.wind.speed.toFixed(0)} kph</p>
          <i className=' text-white'>Wind Speed</i>
          <br className='h-8'/>
          
          </div>
          <div>
          <p className='text-white text-2xl'>{data.main.humidity}%</p>
          <i className=' text-white'>Humidity</i>
          
         
          </div>
            
        </div>

            </div>
        
        
       
     
    </div>
  )}
}

export default Card