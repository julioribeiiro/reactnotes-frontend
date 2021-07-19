import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import NotesServices from '../services/NotesServices';
import { TextField, Typography, MenuItem, Button } from '@material-ui/core';
import { useEffect } from 'react';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('programming');
  const [errors, setErrors] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  const categories = [
    {
      value: 'programming',
      label: 'Programming',
    },
    {
      value: 'vacation',
      label: 'Vacation',
    },
    {
      value: 'meeting',
      label: 'Meeting',
    },
    {
      value: 'blogging',
      label: 'Blogging',
    },
  ];

  const saveNote = e => {
    e.preventDefault();
    if (!title || !body) {
      setErrors(true);
      return;
    }
    const note = { id, title, body, category };
    if (id) {
      NotesServices.updateNote(note)
        .then(() => history.push('/'))
        .catch(error => console.log('Something went wrong', error));
    } else {
      NotesServices.createNote(note)
        .then(() => history.push('/'))
        .catch(error => console.log('Something went wrong', error));
    }
  };

  useEffect(() => {
    if (id) {
      NotesServices.getNote(id)
        .then(response => {
          setTitle(response.data.title);
          setBody(response.data.body);
          setCategory(response.data.category);
        })
        .catch(error => {
          console.log('Something went wrong', error);
        });
    }
  }, []);

  return (
    <div className="main-content">
      <Typography
        variant="h5"
        component="h2"
        color="textSecondary"
        className="text-center"
      >
        {id ? 'Update Note' : 'Create New Note'}
      </Typography>
      {errors && (
        <Typography
          style={{
            color: 'red',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          Please enter the mandatory fields.
        </Typography>
      )}
      <form className="main-content-add">
        <TextField
          label="Note Title"
          color="primary"
          variant="outlined"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
          margin="normal"
        />
        <br />
        <TextField
          label="Note Description"
          color="primary"
          multiline
          required
          rows={4}
          variant="outlined"
          value={body}
          onChange={e => setBody(e.target.value)}
          margin="normal"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Category"
          value={category}
          variant="outlined"
          margin="normal"
          onChange={e => setCategory(e.target.value)}
          helperText="Please select the category of your note."
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={e => saveNote(e)}
          margin="normal"
        >
          {id ? 'Update Note' : 'Add Note'}
        </Button>
      </form>
    </div>
  );
};

export default AddNote;
