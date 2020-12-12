const { RSA_NO_PADDING } = require('constants');
const fs = require('fs');
const data = require('../db/db.json')

module.exports = (app) => {
     
    app.get("/api/notes", (request, result) => {
        fs.readFile("./db/db.json", "utf-8", (err, notes) => {
        if (err) throw (err);
        let notesParsed;
        try {
            notesParsed = [].concat(JSON.parse(notes));
        } catch (err) {
            notesParsed = [];
        }
        result.json(notesParsed);
    })
});

app.post("/api/notes", (request, result) => {
    console.log(data, "adding new note", request.body);
    fs.readFile("./db/db.json", "utf-8", (err, response) => {
        console.log(response);
        let allNotes = JSON.parse(response);
        
        var lastNote = allNotes[allNotes.length - 1].id;
        lastNote = lastNote + 1;
        console.log(lastNote);

        const newNote = { ...request.body, id: lastNote };
        console.log("New Note: ", newNote);
        allNotes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
            if (err) throw (err);
            result.json(allNotes);
            console.log("New note has been added: ", allNotes);
        });
    });
});
};