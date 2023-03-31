
const socket = io('ws://localhost:5000');

socket.on('warning', data => {

const newlist = document.createElement("li");
newlist.innerHTML =
`<div>
<p style="color: black;">Time : ${data.time}</p>
<p><b>Helmet ID : </b>${data.id}</p>
<p><b>Adit Level: </b>${data.adit}</p>
<p><b>Oxygen : </b>${data.oxygen}</p>
<p><b>H2S : </b>${data.h2s}</p>
<p><b>CO : </b>${data.co}</p>
<p><b>LPG : </b>${data.lpg}</p>
</div>`;

// Insert before existing child:
const list = document.getElementById("myList");
list.insertBefore(newlist, list.children[0]);


   
    console.log(data)

});
