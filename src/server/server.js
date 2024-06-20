const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let items = [
{ id: 1, title: 'Item 1', details: 'Details of Item 1' },
{ id: 2, title: 'Item 2', details: 'Details of Item 2' },

];

app.use((req, res, next) => {
res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
res.setHeader('Pragma', 'no-cache');
res.setHeader('Expires', '0');
next();
});

app.get('/api/items', (req, res) => {
const timestamp = new Date().getTime();
res.json(items.map(item => ({ ...item, timestamp })));
});

setInterval(() => {

bash

items = [
    { id: 1, title: 'Item 1 Updated', details: 'Details of Item 1 Updated' },
    { id: 2, title: 'Item 2 Updated', details: 'Details of Item 2 Updated' },

];
console.log('Дані оновлено.');

}, 30000);

app.listen(port, () => {
console.log(Сервер запущено на http://localhost:${port});
});
