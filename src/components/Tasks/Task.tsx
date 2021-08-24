import React, { useState, useRef, useEffect } from 'react'


const Task: React.FC = () => {


  const titleRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const btnRef = useRef<HTMLButtonElement>() as React.MutableRefObject<HTMLButtonElement>;

  const [tasks, setTasks] = useState<string[]>([])
  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(btnRef.current.innerHTML === "ADD")
    {
      if (title === "") {
        setError(true)
        titleRef.current.focus()
        return
      }
      setTasks(prev => [...tasks, title])
      setTitle('')
      
    } else {
        console.log('lets update')
        console.log(title)
    }
   
  }

  const handleDelete = (task: string) => {
    const items = tasks.filter(item => task !== item)
    setTasks(items)
  }

  const handleUpdate = (task:string) => {
    setTitle(task)
    titleRef.current.focus()
    btnRef.current.innerHTML = "UPDATE"
  
  }

  const handleSort = () => {

  }

  useEffect(() => {
    titleRef.current.focus()
    btnRef.current.innerHTML = "ADD"
  }, [])



  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Title"
              aria-label="Title" aria-describedby="btn_title"
              value={title}
              onChange={e => setTitle(e.currentTarget.value)}
              ref={titleRef}
            />

            <div className="input-group-append">
              <button className="btn btn-outline-success" ref={btnRef} type="submit" id="btn_title">ADD</button>
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
              <div className="btn-group" role="group" aria-label="Control Buttons">
                <button type="button" onClick={()=>handleUpdate(task)} className="btn btn-primary">Edit</button>
                <button type="button" onClick={() => handleDelete(task)} className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Task