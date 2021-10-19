import React from "react";
import {useForm} from 'react-hook-form';
function NoteInput(props)
{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const addNote =(data)=>{

    }
    return(
        <div className={props.noteEnabled}>
        <form onSubmit={handleSubmit(addNote)}>     
        <div className="row mt-3">
        <div className="col">
        <p className="text-center">Enter Note</p>  
        </div>
               
         <div className="col">   
         <input type="text" id="inputnote" placeholder="Note" className="form-control"/>
         </div>
         <div className="col">
         <button type="submit" className="btn btn-outline-success mb-3" onClick={addNote}>Submit</button>
         </div>
         </div>
         </form> 
         </div> 
    );
}

export default NoteInput;