// var settings = require('../settings'),
//     Db = require('mongodb').Db,
//     Connection = require('mongodb').Connection,
//     Server = require('mongodb').Server;
// module.exports = new Db(settings.db, new Server(settings.host, 41394, {}), {safe: true});
//
// var settings = require('../settings');
//     var mongodb = require('mongodb');
//    
//
//     var url = 'mongodb://hjml69351:hjml69293@ds041394.mlab.com:41394/user';
//     Db = require('mongodb').Db,
//     Connection = require('mongodb').Connection,
//     Server = require('mongodb').Server;

var mongodb = require('mongodb');
var server = new mongodb.Server("ds041394.mlab.com",41394);
var dbClient = new mongodb.Db("user",server,{safe:true});
module.exports = dbClient;