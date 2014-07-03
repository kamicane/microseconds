'use strict';

import now from './now';
import parse from './parse';

var since = (time) => {
  return now() - time;
};

export { now, parse, since };
