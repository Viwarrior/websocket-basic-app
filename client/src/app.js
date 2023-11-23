const socket = io('ws://localhost:8092');

socket.on('message', text =>{
    console.log(`messsage from the server: ${text}`);
    document.querySelector('ul').appendChild(document.createElement('br'));
    document.querySelector('ul').appendChild(document.createTextNode(text + "\n"));
    
});

function submitMessage(){
    console.log("event submitted");
    const text = document.querySelector('input').value;
    socket.emit('message', text);
}
