import React from 'react'

const TodoItem = (props) => {
  return (
    <div>
        <li className="list-group-item">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={props.item.completed} id="todo-item-check-3" />
                <label className="form-check-label" htmlFor="todo-item-check-3">{props.item.text}</label>
              </div>
        </li>
    </div>
  )
}

export default TodoItem
