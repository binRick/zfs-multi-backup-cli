var select = require('cli-select'),
    genCommand = require('./genCommand'),
    child = require('child_process'),
    mv = require('multiview')(),
    _ = require('underscore');
var collectServers = require('./collectServers');
var handleServerBackup = function(server) {
    var cmd = genCommand(server);
    var mvstream = mv.stream("Performing Backup of Server " + server);
    var spawn = child.spawn(cmd[0], cmd.slice(1,cmd.length-1));
    spawn.on('error',function(e){
		//console.log('ee',e);
    });
    spawn.stdout.pipe(mvstream);
};



collectServers(function(servers) {
    select(servers, function(selected) {
        var sB = selected.map(function(s) {
            return s.value;
        });
        console.log(sB);
        _.each(sB, function(server) {
            handleServerBackup(server);
        });
    });
});
