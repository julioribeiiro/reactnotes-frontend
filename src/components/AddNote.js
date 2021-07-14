import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NotesServices from '../services/NotesServices';
import { TextField, Typography, MenuItem, Button } from '@material-ui/core';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('programming');
  const history = useHistory();

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
    const note = { title, body, category };
    NotesServices.createNote(note)
      .then(() => history.push('/'))
      .catch(error => console.log('Something went wrong', error));
  };

  return (
    <div className="main-content">
      <Typography variant="h5" component="h2" color="textSecondary">
        Creating New Note
      </Typography>
      <form className="main-content-add">
        <TextField
          label="Note Title"
          color="primary"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
          margin="normal"
        />
        <br />
        <TextField
          label="Note Description"
          color="primary"
          multiline
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
        <Button variant="contained" onClick={e => saveNote(e)} margin="normal">
          Add Note
        </Button>
      </form>
    </div>
  );
};

export default AddNote;
