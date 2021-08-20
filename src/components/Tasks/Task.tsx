import React, { useState } from 'react'

const Task: React.FC = () => {

  const [title, setTitle] = useState<string[]>([])


  const handeAdd = () => {

  }

  const handleDelete = () => {

  }

  const handleUpdate = () => {

  }

  return (
    <div className="card">
      <div className="card-body">
        <form action="">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Title"
              aria-label="Title" aria-describedby="btn_title" />
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="button" id="btn_title">ADD</button>
            </div>
          </div>

        </form>

        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A list item
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">Edit</button>
              <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A list item
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">Edit</button>
              <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            A list item
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">Edit</button>
              <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Task