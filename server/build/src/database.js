"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("../keys"));
let pool = promise_mysql_1.default.createPool(keys_1.default.database);
let con = null;
pool.then(function (p) {
    return p.getConnection();
}).then(function (connection) {
    con = connection;
    return con.query('HERE GOES THE QUERY');
}).then(rows => {
    //   con.release();  
});
exports.default = pool;
