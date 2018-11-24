module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notescls

    app.get('/list', notes.findAll);    

    // Retrieve a single Note with noteId
    app.get('/search/:king', notes.findOne);

    //
    app.get('/count', notes.count)
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}