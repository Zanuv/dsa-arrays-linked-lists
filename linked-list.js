/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) {
			this.push(val);
		}
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
	}

	pop() {
		if (!this.head) throw new Error("List is empty");
		let currentNode = this.head;
		let preNode = null;
		while (currentNode.next) {
			preNode = currentNode;
			currentNode = currentNode.next;
		}
		if (preNode) {
			preNode.next = null;
			this.tail = preNode;
		} else {
			this.head = null;
			this.tail = null;
		}
		this.length--;
		return currentNode.val;
	}

	shift() {
		if (!this.head) throw new Error("List is empty");
		let currentNode = this.head;
		this.head = this.head.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentNode.val;
	}

	getAt(idx) {
		if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");
		let counter = 0;
		let currentNode = this.head;
		while (counter !== idx) {
			counter++;
			currentNode = currentNode.next;
		}
		return currentNode.val;
	}

	setAt(idx, val) {
		if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");
		let counter = 0;
		let currentNode = this.head;
		while (counter !== idx) {
			counter++;
			currentNode = currentNode.next;
		}
		currentNode.val = val;
	}

	insertAt(idx, val) {
		if (idx < 0 || idx > this.length) throw new Error("Index is invalid");
		if (idx === this.length) return this.push(val);
		if (idx === 0) return this.unshift(val);
		const newNode = new Node(val);
		let counter = 0;
		let currentNode = this.head;
		let preNode = null;
		while (counter !== idx) {
			counter++;
			preNode = currentNode;
			currentNode = currentNode.next;
		}
		newNode.next = currentNode;
		preNode.next = newNode;
		this.length++;
	}

	removeAt(idx) {
		if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");
		if (idx === 0) return this.shift();
		if (idx === this.length - 1) return this.pop();
		let counter = 0;
		let currentNode = this.head;
		let preNode = null;
		while (counter !== idx) {
			counter++;
			preNode = currentNode;
			currentNode = currentNode.next;
		}
		preNode.next = currentNode.next;
		this.length--;
		return currentNode.val;
	}

	average() {
		if (this.length === 0) return 0; // Return 0 when list is empty

		let sum = 0;
		let currentNode = this.head;
		while (currentNode) {
			sum += currentNode.val;
			currentNode = currentNode.next;
		}
		return sum / this.length;
	}
}

module.exports = LinkedList;
