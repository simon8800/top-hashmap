const LinkedList = require("./linkedlist");
const ListNode = require("./listnode");

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

class Hashmap {
  constructor() {
    this.map = [];
    this.capacity = 12;
    this.size = 0;
    this.loadFactor = 0.8;
  }

  set(key, value) {
    // If a key exists, then the old value is overwritten or updated
    // A collision should utilize
    let hashCode = hash(key, this.capacity);
    if (this.map[hashCode]) {
      console.log("Hello");
    } else {
      let newNode = new Node(value);
      let linkedList = new LinkedList();
      linkedList.head = newNode;
    }
  }

  get(key) {
    // Return a value assigned to the key, if not found then return null
  }

  has(key) {
    // Return true or false if key exists
  }

  length() {
    // Return the number of stored keys in the hashmap
  }

  clear() {
    // removes all entries in the hash map
  }

  keys() {
    // returns an array containing all thge keys inside the hash map
  }

  values() {
    // return an array containing all the values;
  }

  entries() {
    // Return an array that contains each key,value pair [[firstKey, firstValue], [secondKey, secondValue]]
  }

  hash(key, bucketCapacity) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketCapacity;
    }
    return hashCode;
  }

  resize() {}
}
