const app = Lucia.component({ id });
app.mount('#app');

const socket = io();
socket.emit('create', id);
