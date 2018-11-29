const { Pool } = require('pg');

const config = require('./config');

const client = new Pool(config);

const saveNote = (req, res) => {
  client
    .query(`INSERT INTO dmi_notes.notes (note) VALUES ($1);`, [req.body.input])
    .then(() => res.sendStatus(201))
    .catch(err => res.status(500).send(err));
};

const getNotes = (req, res) => {
  client
    .query(`SELECT * FROM dmi_notes.notes ORDER BY id DESC;`)
    .then(data => res.send(data))
    .catch(() => res.sendStatus(500));
};

module.exports = {
  saveNote,
  getNotes,
};
