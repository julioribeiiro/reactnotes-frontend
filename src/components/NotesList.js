import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotesServices from '../services/NotesServices';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    NotesServices.getAll()
      .then(response => {
        console.log(response.data);
        setNotes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main-content">
      <h1>
        <b>List of Notes</b>
      </h1>
      <div className="notes-list mt-4">
        {notes &&
          notes.map(note => (
            <div key={note.id} className="notes-preview mt-3">
              <Link to={`/notes/${note.id}`}>
                <h5 className="primary-color text-capitalize">{note.title}</h5>
                <p>{note.body}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NotesList;
