import React from 'react'
import Rightcontent from './rightcontent/Rightcontent'
import Rightdown from './rightdown/rightdown'
import Rightbo from './rightbo/rightbo'
const Rightside =()=>{ 
  return (
    <div className='rightside'>
      <Rightcontent/>
      <Rightdown/>
      <Rightbo/>
    </div>
  )
}

export default Rightside