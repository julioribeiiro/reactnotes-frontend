import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
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

  const handleDelete = () => {
    NotesServices.deleteNote(id)
      .then(() => {
        history.push('/');
      })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  };

  const handleEdit = () => {
    history.push(`/notes/edit/${id}`);
  };

  return (
    <div className="note-details main-content">
      {currentNote && (
        <div>
          <article>
            <h5 className="text-capitalize">{currentNote.title}</h5>
            <div className="mb-3 font-italic metadata">
              <Moment fromNow>{currentNote.updatedAt}</Moment>
              <span className="text-capitalize">, {currentNote.category}</span>
            </div>
            <div className="mb-3">{currentNote.body}</div>
            <Button
              variant="contained"
              color="primary"
              margin="normal"
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              margin="normal"
              className="ml-3"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </article>
        </div>
      )}
    </div>
  );
};

export default NoteDetails;
