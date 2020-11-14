'use strict'
class LinkedListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  // 末尾に要素を追加する
  push(value) {
    const node  = new LinkedListNode(value)
    if (!this.head) {
      this.head = node
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }

  // 先頭に要素を追加する
  unshift(value) {
    const node = new LinkedListNode(value)
    node.next = this.head
    this.head = node
  }

  toString() {
    const array = []
    let current = this.head
    while (current) {
      array.push(current.value)
      current = current.next
    }
    return array.toString()
  }
}

const list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)

console.log(list.toString())