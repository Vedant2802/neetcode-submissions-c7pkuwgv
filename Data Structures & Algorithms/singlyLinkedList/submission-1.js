class ListNode{
    constructor (val){
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.start = new ListNode(-1)
        this.end = this.start
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.start.next
        let i = 0
        while (curr){
            if (i == index){
                return curr.val
            }
            i++
            curr = curr.next
        }
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let new_node = new ListNode(val)
        new_node.next = this.start.next
        this.start.next = new_node
        if(!new_node.next){
            this.end = new_node
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let new_node = new ListNode(val)
        this.end.next = new_node
        this.end = new_node
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
    let i = 0
    let curr = this.start

    while (curr && i < index) {
        curr = curr.next
        i++
    }

    if (curr && curr.next) {
        if (curr.next === this.end) {
            this.end = curr
        }
        curr.next = curr.next.next
        return true
    }

    return false
}

    /**
     * @return {number[]}
     */
    getValues() {
        let curr = this.start.next;
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
