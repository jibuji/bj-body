import rawBody from './rawBody';
import jsonParser from './jsonParser';
import {Transferer} from 'bj-goods';

let JsonFromRaw = async (req, opts) => {
  let rst = new Transferer(rawBody(req, opts)).transfer(jsonParser).get();
  rst = await rst;
  return rst;
};

export default JsonFromRaw;
