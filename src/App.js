import './App.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div className="App" style={{
      display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",
    }} >
      <Stack direction="row" spacing={2} alignItems="center">
        <h1 style={{ color: "#32364F" }}> Leon </h1>
        <Avatar alt="Leon profile pic" sx={{ width: 300, height: 300 }} src="/Me.jpg" />
        <h1 style={{ color: "#32364F" }}> Lam </h1>
      </Stack>

      <section className="timeline">
        <div className="timeline left"> Project 1 </div>
        <div className="timeline right"> Project 2 </div>
        <div className="timeline left"> Project 3</div>
        <div className="timeline right"> Project 4</div>
        <div className="timeline left">Project 5 </div>
      </section>
    </div >
  );
}

export default App;
