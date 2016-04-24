

import raw from 'raw-body';


/**
 * Return a Promise which parses json requests.
 *
 * Pass a node request or an object with `.req`,
 * such as a koa Context.
 *
 * @param {Request} req
 * @param {Options} [opts]
 * @return {Function}
 * @api public
 */


let rawBody =  (req, opts) => {
  req = req.req || req;
  opts = opts || {};

  // defaults
  var len = req.headers['content-length'];
  if (len) opts.length = len = ~~len;
  opts.encoding = opts.encoding || 'utf8';
  opts.limit = opts.limit || '1mb';

  // raw-body returns a promise when no callback is specified
  return raw(req, opts);
};

export default rawBody;