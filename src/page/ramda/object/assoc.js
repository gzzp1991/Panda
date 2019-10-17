import * as R from 'ramda';
// import { defaultsdeep } from 'lodash';
import { logFontColour } from 'util/constant';

const defaultsdeep = require('lodash/defaultsdeep');

const targ = { a: {} };
const a1 = R.assoc('b', 1, targ);

const payload  = '{"constructor": {"prototype": {"a0": true}}}';

function check() {
  defaultsdeep({}, JSON.parse(payload));
  if (({})[`a0`] === true) {
    console.log('被污染了');
  }
  console.log('2', {}, function() {});
}

// check();

export default function log() {
  console.log('%cassoc', logFontColour);
  console.log(a1);
  console.log(targ.a === a1.a);
}