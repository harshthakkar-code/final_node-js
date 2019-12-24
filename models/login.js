var db=require('../dbconnection');
var admin=
{
    login:function(item,callback)
    {
        return db.query("select * from admin_table where admin_email=? and password=?",[item.admin_email,item.password],callback);
    },
    add_admin:function(item,callback)
    {
        return db.query("insert into admin_table where admin_email=? and password=?",[item.admin_email,item.password],callback);
    },
    delete_admin:function(admin_email,callback)
    {
        return db.query("delete from admin_table where admin_Email=?",[item.admin_email],callback);
    }


}
module.exports=admin;