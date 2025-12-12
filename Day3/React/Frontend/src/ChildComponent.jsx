import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>

        <h3>Parent Data: {props.data.username}</h3>
        <h3>Parent Email: {props.email}</h3>
        <h3>Parent Skills: {props.skills.join(", ")}</h3>
        <div>
            
        </div>
        <h2>This is Child Component</h2>
    </div>
  )
}

export default ChildComponent
