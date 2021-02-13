const socket = io();

const app = Lucia.component({
  teamName: '',
  joined: false,
  join() {
    this.joined = true;
    socket.emit('join', { id, teamName: this.teamName });
  },
  buzz() {
    socket.emit('buzz', { id, teamName: this.teamName });
  }
});

app.mount('#app');

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState == 'visible') {
    console.log('tab is activate');
  } else {
    console.log('tab is inactive');
  }
});
