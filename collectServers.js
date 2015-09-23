var child = require('child_process'),
    config = require('./config');
module.exports = function(_cb) {
    var proxy = config.proxy;
    var cmd = 'ssh ' + proxy + ' zfs list -s used -H -o name | grep ^tank/Snapshots/[a-z]*.$| cut -d \'/\' -f3|tail -n 10';
    var list = child.execSync(cmd).toString().split('\n').filter(function(a) {
        return a;
    });
    _cb(list);
};