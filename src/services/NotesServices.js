import httpClient from '../http-common';

const getAll = () => httpClient.get('/notes');

const createNote = data => httpClient.post('/notes', data);

const getNote = id => httpClient.get(`/notes/${id}`);

const deleteNote = id => httpClient.delete(`/notes/${id}`);

const updateNote = data => httpClient.put('/notes/edit', data);

export default { getAll, createNote, getNote, deleteNote, updateNote };
