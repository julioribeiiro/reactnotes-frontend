import httpClient from '../http-common';

const getAll = () => httpClient.get('/notes');

const createNote = data => httpClient.post('/notes', data);

export default { getAll, createNote };
