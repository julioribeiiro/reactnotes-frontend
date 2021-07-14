import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import NotesServices from '../services/NotesServices';

const NoteDetails = () => {
  const history = useHistory();

  const { id } = useParams();

  const [currentNote, setCurrentNote] = useState('');

  useEffect(() => {
    NotesServices.getNote(id)
      .then(note => {
        setCurrentNote(note.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  });

  const deleteNote = e => {
    e.preventDefault();
    NotesServices.deleteNote(id)
      .then(() => {
        history.push('/');
      })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  };

  return (
    <div className="note-details main-content">
      <article>
        <h5 className="text-capitalize">{currentNote.title}</h5>
        <div className="mb-3 font-italic metadata">
          <span>{currentNote.updatedAt}</span>
          <span className="text-capitalize">, {currentNote.category}</span>
        </div>
        <div className="mb-3">{currentNote.body}</div>
        <Button
          variant="contained"
          color="secondary"
          margin="normal"
          onClick={e => deleteNote(e)}
        >
          Delete
        </Button>
      </article>
    </div>
  );
};

export default NoteDetails;
