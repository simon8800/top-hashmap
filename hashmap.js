const LinkedList = require("./linkedlist");
const ListNode = require("./listnode");

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

class Hashmap {
  constructor() {
    this.map = [];
    this.INITIAL_CAPACITY = 16;
    this.capacity = this.INITIAL_CAPACITY;
    this.size = 0;
    this.loadFactor = 0.8;
  }

  set(key, value) {
    if (this.size * this.loadFactor >= this.capacity) {
      this._resize();
    }

    const index = this._hash(key);
    let pairList = this.map[index];

    if (!pairList) {
      this._createNewList(index, key, value);
    } else {
      this._updateOrAppend(pairList, key, value);
    }
  }

  get(key) {
    // Return a value assigned to the key, if not found then return null
    const index = this._hash(key);
    let pairList = this.map[index];
    if (!pairList) {
      return null;
    }

    let pair = this._findPair(pairList, key);
    return pair ? pair.value : null;
  }

  has(key) {
    // Return true or false if key exists
    const index = this._hash(key);
    let pairList = this.map[index];
    if (!pairList) {
      return false;
    }

    let pair = this._findPair(pairList, key);
    return pair ? true : false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.map = [];
    this.size = 0;
    this.capacity = this.INITIAL_CAPACITY;
  }

  keys() {
    // returns an array containing all the keys inside the hash map
    const keys = [];
    for (let pairList of this.map) {
      if (pairList) {
        let pair = pairList.head;
        while (pair) {
          keys.push(pair.key);
          pair = pair.next;
        }
      }
    }

    return keys;
  }

  values() {
    // return an array containing all the values;
    const values = [];

    for (let pairList of this.map) {
      if (pairList) {
        let pair = pairList.head;
        while (pair) {
          values.push(pair.value);
          pair = pair.next;
        }
      }
    }

    return values;
  }

  entries() {
    // Return an array that contains each key,value pair [[firstKey, firstValue], [secondKey, secondValue]]
    const pairs = [];
    for (let pairList of this.map) {
      if (pairList) {
        let pair = pairList.head;
        while (pair) {
          pairs.push(pair);
          pair = pair.next;
        }
      }
    }

    return pairs;
  }

  _resize() {
    let newCapacity = this.capacity * 2;
    let oldMap = this.map;
    this.map = [];

    for (let pairList of oldMap) {
      if (pairList) {
        let pair = pairList.head;
        while (pair) {
          this.set(pair.key, pair.value);
          pair = pair.next;
        }
      }
    }

    this.capacity = newCapacity;
  }

  _hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  _createNewList(index, key, value) {
    let newNode = new ListNode(key, value);
    let newList = new LinkedList();
    newList.append(newNode);
    this.map[index] = newList;
    this.size++;
    return;
  }

  _updateOrAppend(pairList, key, value) {
    let pair = pairList.head;
    while (pair) {
      if (pair.key === key) {
        pair.value = value;
        return;
      }

      if (!pair.next) {
        pair.next = new ListNode(key, value);
        return;
      }

      pair = pair.next;
    }
  }

  _findPair(pairList, key) {
    let pair = pairList.head;
    while (pair) {
      if (pair.key === key) {
        return pair;
      }
      pair = pair.next;
    }
    return null;
  }
}

const myHashmap = new Hashmap();
myHashmap.set("first", 1);
myHashmap.set("second", 2);
myHashmap.set("third", 3);

console.log(myHashmap.entries());
console.log(myHashmap.length());
