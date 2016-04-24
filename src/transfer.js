

class Transferer {
  constructor(data) {
    this._data = data;
  }

  transfer(next) {
    if (!next || typeof next != 'function') {
      throw new Error("next receiver expect a function or a Transferer Object, not a " + (typeof next));
    }
   
    let data = this._data;
    if (next.name === 'Transferer') {
      data = next.transfer(data);
    } else {
      data = next(data); 
    }
    return new Transferer(data);
  }

  get() {
    return this._data;
  }
};

export default Transferer;