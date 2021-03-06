class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDups(list) {
    let buffer = {
        [list.value]: true
    };
    while (list && list.next) {
        if (buffer[list.next.value]) {
            list.next = list.next.next;
        } else {
            buffer[list.next.value] = true;
            list = list.next;
        }
    }
}

const printLinkedList = function (head) {
    let node = head;
    console.log('start of linked list');
    while (node !== null) {
        console.log(node.value);
        node = node.next;
    }
    console.log('end of linked list');
};

/* TESTS */
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDups(a);
printLinkedList(a);

console.log('List2')

var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('g');
var i = new LinkedList('g');
var j = new LinkedList('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

removeDups(f);
printLinkedList(f);
console.log('List3')
var k = new LinkedList('g');
var l = new LinkedList('g');
var m = new LinkedList('g');
var n = new LinkedList('b');
var o = new LinkedList('g');

k.next = l;
l.next = m;
m.next = n;
n.next = o;

removeDups(k);
printLinkedList(k);