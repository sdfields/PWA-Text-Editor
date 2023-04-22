import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
console.log('PUT from the JATE database');
console.error('putDb not implemented');
// Connection to DB and version
const jateDB = await openDB('jate', 1);
// New transaction from (db, privileges)
const tx = contactDb.transaction('jate', 'readwrite');
// Open object store ('jate')
const store = tx.objectStore('jate');
// PUT Request
const request = store.put({ id: 1, value:content });
// Confirmation
const result = await request;
// Log result
console.log('Database updated!', result.value);
};


export const getDb = async () => {
console.log('GET from the JATE database');
console.error('getDb not implemented');
// Connection to DB and version
const jateDB = await openDB('jate', 1);
// New transaction from (db, privileges)
const tx = contactDb.transaction('jate', 'readonly');
// Open object store ('jate')
const store = tx.objectStore('jate');
// GET All
const request = store.getAll();
// Confirmation
const result = await request;
// Logging and returning result
console.log('result.value', result);
return result;
};


initdb();
