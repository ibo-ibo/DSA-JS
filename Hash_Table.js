class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
    this.keys = {};
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    if (this.keys[key]) return false;

    const hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }
    this.keyMap[hashedKey].push([key, value]);
    this.keys[key] = (this.keys[key] || 0) + 1;

    return true;
  }

  get(key) {
    const hashedKey = this._hash(key);

    const foundArr = this.keyMap[hashedKey];

    let foundElement = undefined;

    foundArr.forEach((val) => {
      if (val[0] === key) {
        foundElement = val[1];
      }
    });

    return foundElement;
  }

  getKeys() {
    const keysArr = [];

    for (const key in this.keys) {
      keysArr.push(key);
    }

    return keysArr;
  }

  getValues() {
    const valuesArr = [];
    const frequency = {};
    this.keyMap.forEach((el) => {
      el.forEach((pair) => {
        if (!frequency[pair[1]]) {
          valuesArr.push(pair[1]);
        }
        frequency[pair[1]] = (frequency[pair[1]] || 0) + 1;
      });
    });
    return valuesArr;
  }
}
