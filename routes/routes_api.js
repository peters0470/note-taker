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
}