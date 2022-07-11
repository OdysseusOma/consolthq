import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const FakePage = (props) => {
  let params = useParams();
  return (
    <div>
      <h2>Voila it worked</h2> 
      <p>{params.id}</p>
    </div>
  )
}

export default FakePage