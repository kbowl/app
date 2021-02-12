const app = Lucia.component({ step: 0, code: '', checked: false });
app.mount('#app')

const socket = io();
socket.emit('ping');
socket.on('pong', (data) => {
  console.log(data);
});
