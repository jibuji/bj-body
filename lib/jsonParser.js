
/**
 * Module dependencies.
 */
import {isPromise} from './islike';

// Allowed whitespace is defined in RFC 7159
// http://www.rfc-editor.org/rfc/rfc7159.txt
var strictJSONReg = /^[\x20\x09\x0a\x0d]*(\[|\{)/;

//parse json use strict mode.
let parse = async (prevRst) => {
  let str = await prevRst;
  
  // strict mode always return object
  if (!str) return {};
  // strict JSON test
  if (!strictJSONReg.test(str)) {
    throw new Error('invalid JSON, only supports object and array');
  }
  return JSON.parse(str);
}

export default parse;