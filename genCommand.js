var config = require('./config');

module.exports = function(server) {
	var CMD2 = 'vzlist -1';
	var CMD = 'time bash td.beo';
    var scmd = 'ssh ' + server + ' ' + CMD;
    var cmd = 'ssh ' + config.proxy + ' ' + scmd + '';
    return cmd.split(' ');
};
