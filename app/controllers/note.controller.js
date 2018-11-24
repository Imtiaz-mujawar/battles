const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    console.log('req', req.body)
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }

    // Create a Note
    const note = new Note({
        // title: req.body.title || "Untitled Note", 
        // content: req.body.content,

        name: req.body.name,
        year: req.body.year,
        battle_number: req.body.year,
        attacker_king: req.body.attacker_king,
        defender_king: req.body.defender_king,
        attacker_1: req.body.attacker_1,
        attacker_2: req.body.attacker_2,
        attacker_3: req.body.attacker_3,
        attacker_4: req.body.attacker_4,
        defender_1: req.body.defender_1,
        defender_2: req.body.defender_2,
        defender_3: req.body.defender_3,
        defender_4: req.body.defender_4,
        attacker_outcome: req.body.attacker_outcome,
        battle_type: req.body.battle_type,
        major_death: req.body.major_death,
        major_capture: req.body.major_capture,
        attacker_size: req.body.attacker_size,
        defender_size: req.body.defender_size,
        attacker_commander: req.body.attacker_commander,
        defender_commander: req.body.defender_commander,
        summer: req.body.summer,
        location: req.body.location,
        region: req.body.region,
        note: req.body.note
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    //findOne({"attacker_king": "surendra"})
    Note.findOne({"attacker_king": req.params.king})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.king
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.king
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.king
        });
    });
};

// Retrieve and return all notes from the database.
exports.count = (req, res) => {
    Note.count({})
    .then(count => {
        res.send({"Records": count});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// // Update a note identified by the noteId in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if(!req.body.content) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Find note and update it with the request body
//     Note.findByIdAndUpdate(req.params.noteId, {
//         title: req.body.title || "Untitled Note",
//         content: req.body.content
//     }, {new: true})
//     .then(note => {
//         if(!note) {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });
//         }
//         res.send(note);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });                
//         }
//         return res.status(500).send({
//             message: "Error updating note with id " + req.params.noteId
//         });
//     });
// };

// Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {
//     Note.findByIdAndRemove(req.params.noteId)
//     .then(note => {
//         if(!note) {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });
//         }
//         res.send({message: "Note deleted successfully!"});
//     }).catch(err => {
//         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.params.noteId
//             });                
//         }
//         return res.status(500).send({
//             message: "Could not delete note with id " + req.params.noteId
//         });
//     });
// };
