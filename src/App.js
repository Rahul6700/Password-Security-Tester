import { useState } from 'react';
import Checker from './checker'; // Import your Checker component
import About from './about';

export default function App() {
  const [about,setabout] = useState(false);
  
  const handleclick =()=>{
    setabout(!about);
  }

  return (
        <>
        <div id="fle"> 
        <h1 id="title">Password Security Tester</h1>
        <button onClick={handleclick}>About</button>
        </div>
        {about ? <About/> : <Checker/>}
        </>
  );
}
