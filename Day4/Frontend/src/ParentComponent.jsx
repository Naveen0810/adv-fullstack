import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <div>
        <ChildComponent email={"naveen@gmail.com"} skills={["html","Js","css"]} data={{username:"Naveen",password:"admin@123"}} />
      <h1>This is Parent Component</h1>
    </div>
  )
}

export default ParentComponent
