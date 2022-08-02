import React from 'react'
import "./rightdown.css"
import Rdata from './rightdowndata'
const Rightdown = () => {
  return (
    <div className='rightdown'>
      <h3>trands for you</h3>
      <div className='trands'>
       {Rdata.map((ele)=>
       {
         const {name,likes}=ele;
         return(
           <>
             <div className='trand'>
               <h3>#{name}</h3>
               <p className='p1'>{likes}likes</p>
             </div>
           </>
         )
       })}
      </div>
    </div>
    
  )
}

export default Rightdown