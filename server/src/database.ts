import mysql from "promise-mysql";

import keys from "../keys";
let pool = mysql.createPool(keys.database);

let con: mysql.PoolConnection | null = null;
pool.then(function(p){  
return  p.getConnection()    
}).then(function(connection) {
con = connection;
return   con.query('HERE GOES THE QUERY') 
}).then(rows => {
//   con.release();  
});
export default pool;