const path = require('path');

function end(done, debug) {
    return function () {
        if (!done.called && debug) {
            done.called = true;
            done.call();
        }
    }
}

function resolve(dir) {
    return path.resolve(__dirname, '..', dir);
}

module.exports = { end, resolve }
