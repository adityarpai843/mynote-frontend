import Note from './components/note'
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Alert from './components/alert';
import NoteInput from './components/noteinput';
function App() {
  const [noteEnabled,noteEnabledSwitch] = useState("d-none boder-0")
  const addNoteDisplay = ()=>{
    noteEnabled ==="d-none boder-0"? noteEnabledSwitch("d-block") :noteEnabledSwitch("d-none boder-0");
  }
  const [data,setData] = useState([{"id":1,"text":"Oops No Notes to Display"}]); 
  const [errObj,setError] = useState([]);
  useEffect(()=>{
   axios.get('http://localhost:8890/notes')
   .then((res)=>{
     setData(res.data)
   })
   .catch((err)=>{
     console.log(err.message)
     setError([err.message])
   })
  },[]);
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text" viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg>&nbsp;
    Note Maker
    </a>
    <ul className="nav justify-content-end">
   <li> 
  <button type="button" className="btn btn-outline-dark" onClick={addNoteDisplay}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
Add
</button>
</li> 
</ul> 
  </div>
   </nav>
   {errObj && errObj.length>0 ? <Alert type="alert alert-danger d-block mt-2" error={errObj}/>:<Alert error="Error dialogue"/>}
    <NoteInput noteEnabled={noteEnabled}/>
    {data.map((note,index)=>{
      return <Note note={note} key={index}/>
    })}       
    </div>
  );
}

export default App;
