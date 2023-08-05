import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
const Home = () => {
  const imgstyle={
    height:"300px",
    width:"300px",
  }

  const containerstyle={
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    height: "90vh",
  }
  return (
    <div style={containerstyle}>
     
      <h3>welcome to the Home page</h3>
    </div>
  )
}

export default Home
