import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([]);

  const [selectedNote1, setSelectedNote1] = useState(0);

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

  const selectnote = (id) => {
    if(selectedNote1 === id){
      const newNotes = [...notes];
      newNotes[newNotes.findIndex(x => x.id === selectedNote1)].selected = false;
      setNotes(newNotes);
      setSelectedNote1(0);
    }
    
    if(selectedNote1 !== 0){
      const newNotes = [...notes];
      var note1idx = newNotes.findIndex(x => x.id === selectedNote1);
      var note2idx = newNotes.findIndex(x => x.id === id);
      var temp = newNotes[note2idx];
      newNotes[note2idx] = newNotes[note1idx];
      newNotes[note1idx] = temp;
      newNotes.map(note => note.selected = false);
      setNotes(newNotes);
      setSelectedNote1(0);
    }

    if(selectedNote1 === 0){
      const newNotes = [...notes];
      newNotes[newNotes.findIndex(x => x.id === id)].selected = true;
      setNotes(newNotes);
      setSelectedNote1(id);
    }
  };

  return(
    <div className='container'>
      <NotesList
        notes={notes}
        handleAddNote={addnote}
        handleDeleteNote={deletenote}
        handleEditNote={editnote}
        handleSelectNote={selectnote}
      />
    </div>
  );
}

export default App;