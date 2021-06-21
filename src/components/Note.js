import { useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [noteText, setNoteText] = useState(text);
    const charLimit = 255;

    const handleChange = (event) => {
        if(charLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        } 
    }

    const handleUpdateClick = (event) => {
        handleEditNote(id, noteText);
        setIsEdit(false);
    }

    const handleEditClick = (event) => {
        setIsEdit(true);
    }

    if(isEdit){
        return(
            <div className='note new'>
                <textarea 
                    rows="8"
                    cols="10"
                    placeholder="Type to add a new note"
                    value={noteText}
                    onChange={handleChange}
                ></textarea>
                <div className='note-footer'>
                    <small>{charLimit - noteText.length} remaining</small>
                    <button className='saveBtn' onClick={handleUpdateClick}>Update</button>
                </div>
            </div>
        )
    } else {
        return(
            <div className="note">
                <span className="note-text">{text}</span>
                <div className="note-footer">
                    <small>{date}</small>
                    <div className='footer-icons'>
                        <MdEdit className='edit-icon' size='1.3em' onClick={handleEditClick}/>
                        <MdDeleteForever className='delete-icon' size='1.3em' onClick={() => handleDeleteNote(id)}/>
                    </div> 
                </div>
            </div>
        );
    }
    
};

export default Note;