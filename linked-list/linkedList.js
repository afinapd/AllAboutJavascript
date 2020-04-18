class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
        // this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertToHead(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    insertToTail(data) {
        let node = new Node(data)
        let tail = null;

        if (this.head===null) {
            this.head = node;
        } else {
            tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
        this.size++
    }

    insertRandom(data, index) {
        if (this.head===null) {
            this.head = new Node(data)
            
        }
        if (index === 0) {
            this.insertToHead(data)
        }
        let node = new Node(data)
        let current, previous;
        let count = 0;
        current = this.head;
        while (count < index) {
            previous = current;
            count++
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++
    }

    getAt(index){
        let current=this.head;
        let count=0;
        let previous
        while(current!=null){
            if(count==index){
                if(previous){
                    console.log(previous.data)
                }
                console.log(current.data);
                if(current.next){
                    console.log(current.next.data)
                }
            }
            count++
            previous=current;
            current=current.next;
        }
        return
    }

    printData() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}
let testLinkedList = new LinkedList();
testLinkedList.insertToHead(100);
testLinkedList.insertToHead(200);
testLinkedList.insertToHead(300);
// testLinkedList.insertRandom(400,2);
testLinkedList.printData()
// testLinkedList.getAt(1)
console.log(testLinkedList);
// console.log(JSON.stringify(testLinkedList,null,4))
