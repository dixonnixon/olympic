const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/olympic_history.db', (err) =>{
    if(err) {
        console.log(err);
    }
});

db.close((err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log("connection closed");
});