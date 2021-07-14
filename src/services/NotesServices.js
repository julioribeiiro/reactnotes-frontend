import httpClient from '../http-common';

const getAll = () => httpClient.get('/notes');

const createNote = data => httpClient.post('/notes', data);

const getNote = id => httpClient.get(`/notes/${id}`);

export default { getAll, createNote, getNote };
