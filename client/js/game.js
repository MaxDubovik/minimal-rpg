const socket = io();
const output = document.getElementById('output');

socket.on('init', (data) => {
    output.textContent = JSON.stringify(data, null, 2);
});

socket.on('state:update', (state) => {
    console.log('state updated', state);
});