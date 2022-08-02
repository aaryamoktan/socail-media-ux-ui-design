import React from 'react'
import Logosearch from '../logosearch/Logosearch'
import Profilecard from '../profilecard/Profilecard'
import Followers from '../followers/followers'
const Profileside = () => {
  return (
    <div className='profileside'>
      <Logosearch/>
      <Profilecard/>
      <Followers/>
    </div>
  )
}

export default Profileside