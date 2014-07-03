/* global performance */
'use strict';

import { now as microTimeNow } from 'microtime';

var now = {};

if (microTimeNow) {

  now = () => microTimeNow();

} else if (global.performance && performance.now) {

  var start = (performance.timing && performance.timing.navigationStart) || Date.now();

  now = () => (start + performance.now()) * 1e3;

} else {

  now = () => Date.now() * 1e3;

}

export default now;
