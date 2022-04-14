import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask, filter } from "../Redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleAdd = () => {
    if (input!=="") {
      dispatch(addtask({ name: input.trim(), id: Math.random(), complete: false }));
      setInput("");
    } else { alert('please write something')
    }
  };
  return (
    <div>
      {" "}
      <div style={{display:'flex',justifyContent:'center'}}> 
     <Button onClick={()=>dispatch(filter('all'))} color="secondary">ALL</Button>
      
      <Button onClick={()=>dispatch(filter('complete'))} variant="contained" color="success">
         Complete
      </Button>
      <Button onClick={()=>dispatch(filter('nocomplete'))} variant="contained" color="error">
         NoComplete
      </Button>
      
      </div>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
        placeholder="write your task..."
      />
      
       <Button onClick={handleAdd} variant="contained">ADDTASK</Button>
     
    </div>
  );
};

export default AddTask;