import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
      {
        id: nanoid(),
        text: "test note text",
        date: "06/21/2021"
      },
      {
        id: nanoid(),
        text: "test note text",
        date: "06/21/2021"
      },
      {
        id: nanoid(),
        text: "test note text",
        date: "06/21/2021"
      }
  ]);

  const addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const editnote = (id, text) => {
    const newNotes = [...notes];
    newNotes.find(x => x.id === id).text = text;
    setNotes(newNotes);
  };

  const deletenote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return(
    <div className='container'>
      <NotesList notes={notes} handleAddNote={addnote} handleDeleteNote={deletenote} handleEditNote={editnote}/>
    </div>
  );
}

export default App;