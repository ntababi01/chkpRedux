import React from 'react'
import Modal from 'react-modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { edit } from '../Redux/actions';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');
  

const EditTask = ({Props}) => {
    const [editText, setEditText] = useState(Props.name);
    const dispatch=useDispatch();
    
  const [modalIsOpen, setIsOpen] = React.useState(false);
  

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }
  function handleEdit(event) {
      event.preventDefault();
      dispatch(edit(editText,Props.id));
      setEditText('');
      closeModal();
      
  }
  return (
    <div>
         <button onClick={openModal}><EditIcon/> </button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
        
        <div>Edit your task</div>
        <form onSubmit={handleEdit}>
          <input   required value={editText} onChange={(event)=>setEditText(event.target.value)} />
          
          <button>submit</button>
          <button type='reset'> reset </button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditTask