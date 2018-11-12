

/**
 * Node
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
// console.log(new Node(12))

/** 
 * Singly Linked List
 */
class SinglyLinkedList {
  constructor() {
    // set list constructor with head, tail, and length of 0
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // create a new Node instance
    // if !head, head = newNode, tail = newNode
    // else, this.tail.next = newNode, tail = newNode
    // length++
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  pop() {
    // pop the last Node instance and move the tail to the previous Node
    // if list length <=0, return null;
    // else if list length === 1, set head = null, tail = null;
    // else get last index - 1, and set it to tail and it's next to null;
    // length--;
    if (this.length <= 0) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while(current.next.next !== null) {
        current = current.next;
      }
      this.tail = current;
      current.next = null;
    }
    this.length--;
    return true;
  }

  unshift(val) {
    // add val to the front
    // create a new node, newNode
    // if, !this.head, this.head = newNode, this.tail = newNode
    // else, newNode.next = this.head, this.head = newNode
    // length++
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return true;
  }

  shift() {
    // remove the val at the front
    // if this.length <= 0, return false;
    // if this.length === 1, this.head = null, this.tail = null
    // else, this.head = this.head.next
    // length--
    if (this.length <= 0) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return true;
  }

  get(i) {
    // find ith item in list
    // if, i < 0 || i >= this.length, return false
    // else, set index = 0, and increment until index = i, and get the node
    if (i < 0 || i >= this.length) return false;
    else {
      let index = 0;
      let current = this.head;
      while(i > index) {
        index++;
        current = current.next;
      }
      return current;
    }
  }

  set(i, val) {
    // find ith element and set it's value to val
    let obj = this.get(i);
    if (obj) obj.value = val;
    return true;
  }

  insert(i,val) {
    // find ith element and insert newNode
    // if i < 0 || i > length -1, return false;
    // if i===0, unshift(val);
    // if i===this.length-1, push(val);
    // else
    // set newNode.next to ith element
    // set i-1th element.next to newNode
    let newNode = new Node(val);
    if (i < 0 || i > this.length - 1) return false;
    if (i === 0) return this.unshift(val);
    else if (i === this.length - 1) return this.push(val);
    else {
      let obj = this.get(i);
      newNode.next = obj;
      this.get(i-1).next = newNode;
      this.length++;
      return true;
    }
  }
  remove(i) {
    // find ith element and remove it
    // if i < 0 || i > length - 1, return false;
    // if i === 0, shift()
    // else if i === length - 1, pop
    // else, get(i-1) and set get(i-1).next to get(i+1)
    if ( i < 0 || i > this.length - 1) return false;
    if (i === 0) return this.shift();
    else if (i === this.length - 1) return this.pop();
    else {
      let prevNode = this.get(i-1);
      let removed = prevNode.next;
      prevNode.next = removed.next;
      this.length--;
      return true;
    }  
  }
  reverse() {
    // 1 -> 2 -> 3 -> 4 goes reverse 1 <- 2 <- 3 <- 4
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    var prevNode;
    let nextNode = null;
    for (let i = 0; i < this.length; i++) {
      prevNode = currentNode.next;
      currentNode.next = nextNode;
      nextNode = currentNode;
      currentNode = prevNode;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("v0");
list.push("v1");
list.push("v2");
list.push("v3");
// list.pop();
// list.unshift("v-1");
// list.shift();
// console.log(list.get(-1));
// list.set(1,"v111")
// list.insert(4,"v0.5");
// list.remove(2);
// list.reverse();
console.log(list);