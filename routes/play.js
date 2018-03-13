/*
 * GET play page.
 */

var playData = require("../playData.json");
var workData = require ("../workdata.json");

exports.view = function(req, res){
  	console.log(playData);
  	res.render('play', playData);
};
