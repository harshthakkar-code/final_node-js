var mysql=require('mysql');
var con=mysql.createPool({
    host:'localhost',user:'root',password:'',database:'final'
});

module.exports=con;