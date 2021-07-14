import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import NotesServices from '../services/NotesServices';

const NoteDetails = () => {
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

  return (
    <div className="note-details main-content">
      <article>
        <h5 className="text-capitalize">{currentNote.title}</h5>
        <div className="mb-3 font-italic metadata">
          <span>{currentNote.updatedAt}</span>
          <span className="text-capitalize">, {currentNote.category}</span>
        </div>
        <div className="mb-3">{currentNote.body}</div>
      </article>
    </div>
  );
};

export default NoteDetails;
