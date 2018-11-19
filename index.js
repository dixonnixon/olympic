const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) =>{
    if(err) {
        console.log(err);
    }
});

db.close((err) => {
    return console.log(err.message);
});