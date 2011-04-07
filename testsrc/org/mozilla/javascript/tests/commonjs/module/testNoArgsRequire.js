/**
 * @version $Id$
 */
var assert = require("assert");
try {
    require();
    assert.fail("require() succeeded with no arguments");
}
catch(e) {
    assert.equal(e.message, "require() needs one argument");
}

try {
    new require();
    assert.fail("require() succeeded as a constructor");
}
catch(e) {
    assert.equal(e.message, "require() can not be invoked as a constructor");
}