import React, { useState, useRef, useEffect } from 'react'

const Task: React.FC = () => {


  const titleRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  const [tasks, setTasks] = useState<string[]>([])
  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<boolean>(false)


  const handeAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (title === "") {
      setError(true)
      titleRef.current.focus()
      return
    }
    setTasks(prevItem => [...tasks, title])
  }

  const handleDelete = () => {
      const items = tasks.length;
      
  }

  const handleUpdate = () => {

  }

  useEffect(() => {
      titleRef.current.focus()
  }, [])

  

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handeAdd}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Title"
              aria-label="Title" aria-describedby="btn_title"
              value={title}
              onChange={e => setTitle(e.currentTarget.value)}
              ref={titleRef}
            />

            <div className="input-group-append">
              <button className="btn btn-outline-success" type="submit" id="btn_title">ADD</button>
            </div>
          </div>
          {error && <div className="alert alert-danger">
            Title is empty!
          </div>}
        </form>


        <ul className="list-group">
          {tasks && tasks.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {task}
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Task