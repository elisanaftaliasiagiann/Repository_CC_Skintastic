//memanggil lib mysql
var mysql = require('mysql2');

//membuat koneksi database
 const conn = mysql.createConnection({
     host: "34.101.84.186",
     user: "root",
     password: "password",
     database: "skintastic",
 });

// const conn = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "skintastic-v2",
// });

conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("MYSQL berhasil terkoneksi");
  }
});

module.exports = conn;