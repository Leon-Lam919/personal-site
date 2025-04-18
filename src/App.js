import './App.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div className="App" style={{
      display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", gap: '2rem'
    }} >
      <Stack direction="row" spacing={2} alignItems="center">
        <h1 style={{ color: "#32364F" }}> Leon </h1>
        <Avatar alt="Leon profile pic" sx={{ width: 300, height: 300 }} src="/Me.jpg" />
        <h1 style={{ color: "#32364F" }}> Lam </h1>
      </Stack>

      <section className="project">
        <div className="project-item project-left">
          <h3 className='project-title'>SmileWorks</h3>
          <h5 className='project-title'>Dental clinic Management system</h5>
          <p className='project-title'>
            Developed a scalable, multi-tenant web application using <b>Next.js</b>, <b>TypeScript</b>, and <b>Tailwind CSS </b> for a responsive and modern frontend experience, paired with Express.js for backend development and server configuration. Collaborated closely with the team to ensure clean architecture and maintainable code, adhering to best practices throughout. Engineered robust RESTful APIs, implemented secure JWT-based authentication, and managed backend operations including Linux-based server management for file handling, process monitoring, and user access. The project was designed with scalability in mind, allowing support for multiple organizations or user groups, and thoroughly tested using Postman for API reliability.
          </p>
        </div>
        <div className="project-item project-right">
          <h3 className='project-title'>Catafun </h3>
          <h5 className='project-title'>UTD capstone project</h5>
          <p className='project-title'>UTD capstone project, working with a company to create an ai assisted chatbot that </p>
        </div>
        <div className="project-item project-left">
          <h3 className='project-title'>Project 3 </h3>
          <p className='project-title'>Project description left</p>
        </div>
        <div className="project-item project-right">
          <h3 className='project-title'>Project 4 </h3>
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
