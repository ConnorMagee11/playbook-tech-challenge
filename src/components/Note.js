import { useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote, handleSelectNote, selected }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [noteText, setNoteText] = useState(text);
    const charLimit = 255;

    const handleChange = (event) => {
        if(charLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        } 
    }

    const handleUpdateClick = (event) => {
        event.stopPropagation();
        handleEditNote(id, noteText);
        setIsEdit(false);
    }

    const handleEditClick = (event) => {
        event.stopPropagation();
        setNoteText(text);
        setIsEdit(true);
    }

    const handleDeleteClick = (event) => {
        event.stopPropagation();
        handleDeleteNote(id)
    }

    const handleSelect = (event) => {
        if(isEdit === false){
            handleSelectNote(id);
        }
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
            <div className={selected ? 'note selected' : 'note'} onClick={handleSelect}>
                <span className="note-text">{text}</span>
                <div className="note-footer">
                    <small>{date}</small>
                    <div className='footer-icons'>
                        <MdEdit className='edit-icon' size='1.3em' onClick={handleEditClick}/>
                        <MdDeleteForever className='delete-icon' size='1.3em' onClick={handleDeleteClick}/>
                    </div> 
                </div>
            </div>
        );
    }
    
};

export default Note;