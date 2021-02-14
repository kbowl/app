const socket = io();


const app = Lucia.component({
  teamName: '',
  joined: false,
  ping: 0,
  score: 0,
  join() {
    if (this.teamName.trim() === '') return alert('Please enter a valid team name');
    this.joined = true;
    socket.emit('join', { id, teamName: this.teamName });
  },
  buzz() {
    socket.emit('buzz', { id, teamName: this.teamName });
  }
});

app.mount('#app');

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('tab is activate');
  } else {
    console.log('tab is inactive');
  }
});


socket.emit('ping', Date.now());
socket.on('pong', (data) => {
  app.state.ping = parseInt(data);
});

socket.on('score', (data) => {
  if (app.state.teamName !== data.teamName) return;
  app.state.score = parseInt(data.score);
});
