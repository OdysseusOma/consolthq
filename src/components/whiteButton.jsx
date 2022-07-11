import React from 'react'
import Button from "@mui/material/Button"

const whiteButton = (props) => {
  return (
    <Button  style={{
        borderRadius: 5,
        borderColor: "#2A72BF",
        color: "black",
        fontSize: "10px"
    }}
    variant="outlined" className='myBtn'>
        {props.name}
      </Button>
  )
}

export default whiteButton