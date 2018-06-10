// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.1-25-s
description: >
    Strict Mode - Function code of Accessor PropertyAssignment
    contains Use Strict Directive which appears at the start of the
    block(getter)
flags: [noStrict]
---*/


assert.throws(SyntaxError, function() {
            var obj = {};
            Object.defineProperty(obj, "accProperty", {
                set: function () {
                    "use strict";
                    eval("var public = 1;");
                    return 11;
                }
            });
            obj.accProperty = "overrideData";
});
