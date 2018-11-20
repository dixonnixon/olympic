const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(
    './db/olympic_history.db', 
    sqlite3.OPEN_READWRITE,
    (err) =>{
        if(err) {
            console.log(err);
        }
    });
    
//SELECT name FROM my_db.sqlite_master WHERE type='table';
db.serialize(() => {
    db.each(
        `SELECT name FROM sqlite_master WHERE type='table'`,
        (err, row) => {
            if(err) {
                return console.error(err.message);
            }
            console.log(row);                       
        }
    );
});

db.close((err) => {
    if(err) {
        return console.error(err.message);
    }
    console.log("Closed");
});