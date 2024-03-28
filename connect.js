import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'social'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conected to the database');
});