import './App.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div className="App" style={{
      display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", gap: '2rem'
    }} >
      <Stack direction="row" spacing={2} alignItems="center">
        <h1 style={{ color: "#32364F" }}> Leon </h1>
        <Avatar alt="Leon profile pic" sx={{ width: 300, height: 300 }} src="/Me.jpg" />
        <h1 style={{ color: "#32364F" }}> Lam </h1>
      </Stack>

      <section className="project">
        <div className="project-item project-left">
          <h3 className='project-title'>SmileWorks</h3>
          <p className='project-title'>
            Created a full stack application working mainly in the backend. Functionality included a working appointment system, inventory management, etc.
          </p>
        </div>
        <div className="project-item project-right">
          <h3 className='project-title'>Project 2 </h3>
          <p className='project-title'>Project description right</p>
        </div>
        <div className="project-item project-left">
          <h3 className='project-title'>Project 3 </h3>
          <p className='project-title'>Project description left</p>
        </div>
        <div className="project-item project-right">
          <h3 className='project-title'>Project 2 </h3>
          <p className='project-title'>Project description right</p>
        </div>
        <div className="project-item project-left">
          <h3 className='project-title'>Project 5 </h3>
          <p className='project-title'>Project description left</p>
        </div>
      </section>
    </div >
  );
}

export default App;
