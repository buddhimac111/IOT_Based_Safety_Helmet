const socket = io('ws://localhost:5000');

socket.on('message', text => {

//     const el = document.createElement('li');
//     el.innerHTML = text.username;
//    document.querySelector('ul').appendChild(el)

const newNode = document.createElement("li");

// Create a text node:
const textNode = document.createTextNode(text.username);
// Append text node to "li" element:
newNode.appendChild(textNode);


// Insert before existing child:
const list = document.getElementById("myList");
list.insertBefore(newNode, list.children[0]);


   
    console.log(text)

});
