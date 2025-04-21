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
          <h5 className='project-title'>Dental clinic Management system</h5>
          <p>A scalable, multi-tenant web appplication designed for dental clinics, featuring comprehensive tools for patient management, appointment scheduling, insurance verification, and inventory control. </p>
          <ul>
            <li><b>Backend: </b>Developed using <b>Express</b> and <b>MongoDB</b>, with a focus on designing efficient scehams and building secure, <b>JWT-authenticated</b> RESTful APIs</li>
            <li><b>Frontend: </b> Built with <b>Next.js, TypeScript,</b>and <b>Tailwind CSS</b> for a responsive, modern user experience.</li>
            <li><b>Testing: </b> Ensured API reliability through testing in <b>Postman</b>.</li>
            <li><b>Collaboration: </b> Worked closely with a team and two team leads with decades of experience in industry to maintain clean archirecture and adhere to best practices.</li>
          </ul>
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
