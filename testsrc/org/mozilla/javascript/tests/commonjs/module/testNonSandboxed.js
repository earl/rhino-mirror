/**
 * @version $Id$
 */
var assert = require("assert");
function isUndefined(x) {var u; return x === u;}
assert.ok(isUndefined(require.paths));
assert.ok(isUndefined(module.uri));