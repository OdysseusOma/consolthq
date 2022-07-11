import React from 'react'
import ReactDOM from "react-dom"
import Button from "@mui/material/Button"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function button(props) {
  return (
    <Button  style={{
      borderRadius: 5,
      backgroundColor: "#17579B",
      fontSize: "10px"
  }}
  variant="contained" className='myBtn'>
      {props.name}<ArrowForwardIcon  style={{
        fontSize: "10px"
    }}/>
    </Button>
  )
}

export default button