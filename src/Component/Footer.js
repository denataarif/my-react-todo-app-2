import React from 'react'

const Footer = (props) => {
  return (
    <div className="todo-footer">
      <span className="count-todos">
      {props.items.length > 1 ? <p>{props.items.length} Items Left</p> : <p>{props.items.length} Item Left</p>}
      </span>
    </div>
  )
}

export default Footer
