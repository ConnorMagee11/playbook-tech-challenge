import Note from './Note';
import AddNote from './AddNote';
const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote, handleSelectNote }) => {
    return(
        <div className="notes-list">
            {
                notes.map((note) => 
                    <Note 
                        id={note.id}
                        text={note.text}
                        date={note.date}
                        handleDeleteNote={handleDeleteNote}
                        handleEditNote={handleEditNote}
                        handleSelectNote={handleSelectNote}
                        selected={note.selected}
                    />
                )
            }
        <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;