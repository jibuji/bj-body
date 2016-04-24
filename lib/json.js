import rawBody from './rawBody';
import jsonParser from './jsonParser';
import Transferer from './transferer';
import {isPromise} from './islike';

let parse = async (req, opts) => {
  let rst = new Transferer(rawBody(req, opts)).transfer(jsonParser).get();
  rst = await rst;
  return rst;
};

export default parse;