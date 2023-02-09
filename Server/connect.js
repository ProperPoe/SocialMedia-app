import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"5030Steves#Database?",
    database:"social"
})