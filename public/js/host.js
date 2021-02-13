// (() => {
const app = Lucia.component({ id, entries: [], tests: [1, 2, 3] });
app.mount('#app');

const socket = io();
socket.emit('create', id);

socket.once('create', (success) => {
  if (!success) location = `/`;
});

socket.on('buzz', (teamName) => {
  app.state.entries.push({ teamName, date: new Date().toLocaleTimeString() });
});
// })();
