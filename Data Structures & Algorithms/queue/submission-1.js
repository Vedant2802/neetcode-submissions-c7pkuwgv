
class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}


class MyDeque {
    constructor() {
        this.dummyHead = new Node(-1)
        this.dummyTail = new Node(-1)

        // Connect dummy head and tail nodes
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        // Since both are dummy head and tail pointers which means there is no element b/w them
        return this.dummyHead.next === this.dummyTail
    }

    /**
     * @param {number} value
     */
    append(value) {
        const new_node = new Node(value)
        const last_node = this.dummyTail.prev
        last_node.next = new_node
        new_node.prev = last_node
        new_node.next = this.dummyTail
        this.dummyTail.prev = new_node
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const new_node = new Node(value)
        const first_node = this.dummyHead.next
        new_node.next = first_node
        new_node.prev = this.dummyHead
        this.dummyHead.next = new_node
        first_node.prev = new_node;
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.isEmpty()){
            return -1
        }
        const targetNode = this.dummyTail.prev
        const prevNode = targetNode.prev
        const value = targetNode.value

        this.dummyTail.prev = prevNode
        prevNode.next = this.dummyTail

        return value
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }
        const targetNode = this.dummyHead.next;
        const nextNode = targetNode.next;
        const value = targetNode.value;

        this.dummyHead.next = nextNode;
        nextNode.prev = this.dummyHead;

        return value;
    }
}
