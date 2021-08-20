import React from 'react';
import Tasks from './components/Tasks'

function App() {
  return (
    <main className="container">
      <div className="row">
        <div className="col-10 mx-auto p-5">
          <h2 className="text-dark text-center">Task Manager</h2>
          <Tasks />
        </div>
      </div>
    </main>
  );
}

export default App;
