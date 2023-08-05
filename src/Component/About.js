import React from 'react'

const About = () => {
  const containerstyle={
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    height: "90vh",
  }
  return (
    <div style={containerstyle}>
      <h3>welcome to the About page</h3>
      {/* <h1>this is updated</h1> */}
    </div>
  )
}

export default About
