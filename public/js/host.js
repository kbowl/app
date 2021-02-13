// (() => {
const app = Lucia.component({ id, teams: [], leaderboard: [], entries: [] });
app.mount('#app');

const socket = io();
socket.emit('create', id);

socket.once('create', (success) => {
  if (!success) location = `/`;
});

socket.on('buzz', (teamName) => {
  if (!app.state.entries.some((entry) => entry.teamName === teamName)) {
    app.state.entries.push({ teamName, date: new Date().toLocaleTimeString() });
  }
});

socket.on('join', (teamName) => {
  if (!app.state.leaderboard.some((team) => team[0] === teamName)) {
    app.state.leaderboard.push([teamName, 0]);
  }
});
// })();
